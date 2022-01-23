import axios from "axios"

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
    // baseURL: process.env.baseURL || process.env.apiUrl || ""
    // timeout: 60 * 1000, // Timeout
    // withCredentials: true, // Check cross-site Access-Control
    baseURL: 'http://localhost:8080',
    timeout: 10 * 1000,
    withCredentials: true,
};

const pendingMap = new Map();

const _axios = axios.create(config)

_axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        config.headers["Content-Type"] = "application/json";
        removePending(config);
        addPending(config);
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function (response) {
        // Do something with response data
        removePending(response.config);
        return response;
    },
    function (error) {
        // Do something with response error
        error.config && removePending(error.config);
        return Promise.reject(error);
    }
);

function post(url, params) {
    return new Promise((resolve, reject) => {
        _axios.post(url, params)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
    })
}

function get(url, param) {
    return new Promise((resolve, reject) => {
        _axios.get(url, {params: param})
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
    })
}

export default {
    get,
    post,
}

/**
 * 生成每个请求唯一的键
 * @param {*} config
 * @returns string
 */
function getPendingKey(config) {
    let {url, method, params, data} = config;
    if (typeof data === 'string') data = JSON.parse(data); // response里面返回的config.data是个字符串对象
    return [url, method, JSON.stringify(params), JSON.stringify(data)].join('&');
}

/**
 * 储存每个请求唯一值, 也就是cancel()方法, 用于取消请求
 * @param {*} config
 */
function addPending(config) {
    const pendingKey = getPendingKey(config);
    config.cancelToken = config.cancelToken || new axios.CancelToken((cancel) => {
        if (!pendingMap.has(pendingKey)) {
            pendingMap.set(pendingKey, cancel);
        }
    });
}

/**
 * 删除重复的请求
 * @param {*} config
 */
function removePending(config) {
    const pendingKey = getPendingKey(config);
    if (pendingMap.has(pendingKey)) {
        const cancelToken = pendingMap.get(pendingKey);
        cancelToken(pendingKey);
        pendingMap.delete(pendingKey);
    }
}

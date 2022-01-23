import Vue from "vue"

export default {
    async login(param = {}) {
        return Vue.prototype.$axios.post(`/account/v1/login`, param);
    },
    async register(param = {}) {
        return Vue.prototype.$axios.post(`/account/v1/register`, param);
    }
}

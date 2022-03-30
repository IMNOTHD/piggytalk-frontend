import Vue from "vue"

export default {
    async login(param: { account: string, password: string, reCaptchaToken: string }) {
        return Vue.prototype.$axios.post(`/account/v1/login`, param);
    },
    async register(param: { username: string, password: string, email: string, phone: string, nickname: string, reCaptchaToken: string }) {
        return Vue.prototype.$axios.post(`/account/v1/register`, param);
    },
    async updateAvatar(param: { token: string, avatar: string }) {
        return Vue.prototype.$axios.post(`/account/v1/avatar`, param);
    }
}

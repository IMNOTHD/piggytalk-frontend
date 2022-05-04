import Vue from "vue"
import VueRouter, {RawLocation, Route} from "vue-router"
import Main from "@/pages/Main.vue";
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import App from "@/pages/App.vue";
import TalkHistory from "@/pages/App/TalkHistoryPage.vue";

Vue.use(VueRouter)

// location.hash='/'
const routes = [
    {path: "/", component: Main, meta: {title: "首页 - PiggyTalk"}},
    {path: "/login", component: Login, meta: {title: "登录 - PiggyTalk"}},
    {path: "/register", component: Register, meta: {title: "注册 - PiggyTalk"}},
    {
        path: "/app", component: App, meta: {title: "PiggyTalk"}, children: [{
            path: ':id', component: TalkHistory
        }]
    },
    {path: "/:pathMatch(.*)*", name: "NotFound", redirect: "/"}
]

const router = new VueRouter({
    mode: process.env.IS_ELECTRON ? "hash" : "history",
    routes
})

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    // @ts-ignore
    if (to.meta.title) {
        // @ts-ignore
        document.title = to.meta.title
    }
    next()
})

export default router

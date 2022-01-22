import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "@/pages/Main";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import App from "@/pages/App";

Vue.use(VueRouter)

const routes = [
  { path: "/", component: Main },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/app", component: App },
  { path: "/:pathMatch(.*)*", name: "NotFound", redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router


import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

import Home from "../components/pages/Home/Home.vue";
import Car from "../components/pages/Car/Car.vue";

import Mine from "../components/pages/mine/Mine.vue";
import Login from "../components/pages/mine/Login.vue";
import User from "../components/pages/mine/User.vue";

import Classify from "../components/pages/classplus/Classify.vue";
import XQ from "../components/pages/classplus/XQ.vue";
import NotFound from "../components/pages/NotFound/NotFound.vue";

const router = new VueRouter({
    routes: [
        { path: "", redirect: "/home" },
        { path: "/home", name: "home", component: Home },
        { path: "/car", name: "car", component: Car },
        { path: "/mine", name: "mine", component: Mine, children: [
        	{path: 'login', name: 'login', component: Login},
        	{path: 'user', name: 'user', component: User}
        ], beforeEnter (to, from, next) {
        	next();
        } },
        { path: "/classify", name: "classify", component: Classify },
        { path: "/xq", name: "xq", component: XQ },
        { path: "/not-found", name: "not-fund", component: NotFound },
        { path: "**", redirect: "/not-found" }
    ]
})
export default router;
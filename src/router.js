import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import ErrorPage from "./views/ErrorPage";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Home },
        { path: "*", component: ErrorPage}
    ]
});

export default router;
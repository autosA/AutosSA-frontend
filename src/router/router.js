import { createWebHistory, createRouter } from "vue-router"

import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";

const routes = [
    { path: "/", component: HomePage },
    { path: "/login", component: LoginPage},
    { path: "/register", component: RegisterPage}
];



export const router = createRouter({
    history: createWebHistory(),
    routes,
});
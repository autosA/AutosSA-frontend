import { createWebHistory, createRouter } from "vue-router"

import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import ShoppingPage from "@/pages/ShoppingPage.vue";

const routes = [
    { path: "/", component: HomePage },
    { path: "/login", component: LoginPage},
    { path: "/register", component: RegisterPage},
    { path: "/shopping", component: ShoppingPage}
];



export const router = createRouter({
    history: createWebHistory(),
    routes,
});
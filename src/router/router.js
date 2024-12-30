import { createWebHistory, createRouter } from "vue-router"

import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import ShoppingPage from "@/pages/ShoppingPage.vue";
import AdminGestionClientesPage from "@/pages/AdminGestionClientesPage.vue";
import AdminPublicacionesPage from "@/pages/AdminPublicacionesPage.vue";
import AdminPerfilPage from "@/pages/AdminPerfilPage.vue";

const routes = [
    { path: "/", component: HomePage },
    { path: "/login", component: LoginPage},
    { path: "/register", component: RegisterPage},
    { path: "/shopping", component: ShoppingPage},
    { path: "/gestionAdmin", component: AdminGestionClientesPage},
    { path: "/publicacionAdmin", component: AdminPublicacionesPage},
    { path: "/perfilAdmin", component: AdminPerfilPage}
];



export const router = createRouter({
    history: createWebHistory(),
    routes,
});
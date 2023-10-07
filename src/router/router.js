import { createRouter, createWebHistory } from "vue-router";
import ProductAll from "../components/ProductAll.vue";
import DetailsAll from "../components/DetailsAll.vue";

const routes = [
    {path: "/", component: ProductAll},
    {path: "/product/:id", component: DetailsAll, name: "product"},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;

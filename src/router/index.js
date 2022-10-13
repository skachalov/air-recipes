import {createRouter, createWebHistory} from "vue-router"
import MainPageController from "@/controllers/MainPageController"
import ItemPageController from "@/controllers/ItemPageController"

const routes = [
    {
        path: "/",
        component: MainPageController
    },
    {
        path: "/:id",
        component: ItemPageController
    }
]

export default createRouter({
    routes,
    history: createWebHistory()
})
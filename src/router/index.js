import {createRouter, createWebHistory} from "vue-router"
import { routes } from "@/router/routes"

export default createRouter({
    routes,
    history: createWebHistory()
})
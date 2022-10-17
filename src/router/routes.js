import MainPageController from "@/controllers/MainPageController"
import ItemPageController from "@/controllers/ItemPageController"

export const routes = [
    {
        path: "/air-recipes",
        component: MainPageController
    },
    {
        path: "/air-recipes/:id",
        component: ItemPageController
    }
]
import MainPageController from "@/controllers/MainPageController";
import ItemPageController from "@/controllers/ItemPageController";

export const routes = [
    {
        path: "/",
        component: MainPageController
    },
    {
        path: "/:id",
        component: ItemPageController
    }
]
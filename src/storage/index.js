import { createStore } from "vuex"
import recipes from "@/storage/recipes"
import recipe from "@/storage/recipe"
import modal from "@/storage/modal"

export default createStore({
    modules: {
        recipes,
        recipe,
        modal
    }
})

import {createStore} from "vuex";
import recipes from "@/storage/recipies";

export default createStore({
    modules: {
        recipes
    }
})
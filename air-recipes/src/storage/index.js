import {createStore} from "vuex";
import recipes from "@/storage/recipes";

export default createStore({
    modules: {
        recipes
    }
})
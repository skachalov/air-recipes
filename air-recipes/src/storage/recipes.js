import axios from "axios";

export default {
    state: {
        recipes: []
    },
    getters: {

    },
    actions: {
        async fetchGetRecipes(context) {
            await axios.get("https://test.kode-t.ru/list.json")
                .then(response => {
                    if (response.status === 200) {
                        context.commit('setRecipes', response.data)
                    }
                })
        }
    },
    mutations: {
        setRecipes(state, recipes) {
            state.recipes = recipes
        }
    }
}
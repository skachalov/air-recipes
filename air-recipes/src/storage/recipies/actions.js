import axios from "axios";

export default {
    async fetchGetRecipes(context) {
        await axios.get("https://test.kode-t.ru/list.json")
            .then(response => {
                if (response.status === 200) {
                    context.commit('setRecipes', response.data)
                }
            })
            .then(() => {
                context.commit('setCuisinesIncluded', context.getters.getCuisines)
                context.commit('setMaxAndMinCaloricity', context.getters.getCaloricityRange)
            })
    }
}
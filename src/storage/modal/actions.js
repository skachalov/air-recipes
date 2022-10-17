export default {
    switchIsShownModal({ commit }) {
        commit("switchIsShownModal")
    },

    changeIsAnyFilter({ commit }, value) {
        commit("changeIsAnyFilter", value)
    }
}
export default {
    switchIsShownModal(state) {
        state.isShownModal = !state.isShownModal
    },

    changeIsAnyFilter(state, value) {
        state.isAnyFilter = value
    }
}
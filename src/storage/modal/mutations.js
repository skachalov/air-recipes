export default {
    switchIsShownModal(state) {
        state.isShownModal = !state.isShownModal
    },

    changeIsAnyFilter(state, value) {
        // console.log(value)
        state.isAnyFilter = value
    }
}
export default class ModalViewModel {
    constructor(modalStore) {
        this._store = modalStore
    }

    switchIsShownModal() {
        this._store.dispatch("switchIsShownModal")
    }

    changeIsAnyFilter(value) {
        this._store.dispatch("changeIsAnyFilter", value)
    }
}
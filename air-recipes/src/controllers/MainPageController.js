import storage, {viewModel} from "@/storage"
import { ref } from "vue"

class MainPageController {
    constructor() {
        this.state = {
            DEFAULT_HEADER_HEIGHT: 600,
            headerHeight: ref(600),
            scrollReaction: ref(true),
            searchLine: ref("")
        }
        this.store = storage
    }

    fetchRecipes() {
        viewModel.getRecipesViewModal().fetchRecipes()
    }

    getRecipes() {
        return this.store.getters.getRecipes
    }

    addScrollEvent() {
        window.addEventListener('scroll', () => this.changeHeaderHeight())
    }

    addResizeEvent() {
        window.addEventListener('resize', () => this.updateWidth())
    }

    computeMargin() {
        return !this.state.scrollReaction.value
            ? '75px'
            : this.state.headerHeight.value > 460
                ? 0
                : this.state.headerHeight.value + 'px'
    }

    changeHeaderHeight() {
        if (!this.state.scrollReaction.value) return

        let scrollVar = window.pageYOffset

        if (scrollVar < 282) {
            this.state.headerHeight.value = this.state.DEFAULT_HEADER_HEIGHT - scrollVar / 2
        }
        else this.state.headerHeight.value = 360
    }

    updateWidth() {
      if (window.innerWidth <= 1320) {
        if (window.innerWidth <= 960) this.state.headerHeight.value = 450
        else this.state.headerHeight.value = 360

        this.state.scrollReaction.value = false
      }
      else {
        this.state.headerHeight.value = this.state.DEFAULT_HEADER_HEIGHT
        window.scrollTo(0, 0)

        this.state.scrollReaction.value = true
      }
    }

    switchIsShownModal() {
        viewModel.getModalViewModel().switchIsShownModal()
    }

    searchRecipes() {
        viewModel.getRecipesViewModal().setSearchLine(this.state.searchLine.value)
    }
}

export default new MainPageController()
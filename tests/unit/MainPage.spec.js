import { shallowMount } from "@vue/test-utils"
import MainPage from "@/pages/MainPage"

describe("MainPage.vue", () => {
    const wrapper = shallowMount(MainPage)
    const recipes = [{ id: 0, recipe: {} }, { id: 1, recipe: {}}]

    it("shows base-progress where there is no recipes", () => {
        expect(wrapper.find("#main-page-base-progress").exists()).toBe(true)
    })
    it("removes base-progress where there is no recipes", async () => {
        await wrapper.setProps({ isLoadedRecipes: true, getRecipes: recipes })
        expect(wrapper.find("#main-page-base-progress").exists()).toBe(false)
    })
    it("shows correct amount of recipes", () => {
        expect(wrapper.findAll(".main-page-base-card").length).toBe(recipes.length)
    })
    it("shows base-warning if correct recipes exist", () => {
        expect(wrapper.find("#main-page-base-warning").exists()).toBe(false)
    })
    it("removes base-warning if correct recipes exist", async() => {
        await wrapper.setProps({ getRecipes: [] })
        expect(wrapper.find("#main-page-base-warning").exists()).toBe(true)
    })
})
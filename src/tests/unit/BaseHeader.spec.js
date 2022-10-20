import { shallowMount } from "@vue/test-utils"
import BaseHeader from "@/components/BaseHeader/BaseHeader"

describe("BaseHeader.vue", () => {
    const wrapper = shallowMount(BaseHeader)

    it("shows image when height more than 200", async () => {
        await wrapper.setProps({ height: 201 })

        expect(wrapper.find(".image-container").isVisible()).toBe(true)
    })
    it("shows image when height is 200 or less", async () => {
        await wrapper.setProps({ height: 200 })

        expect(wrapper.find(".image-container").isVisible()).toBe(false)
    })
    it("base-header-shadow class not exists when height is 600 or more", async () => {
        await wrapper.setProps({ height: 600 })

        expect(wrapper.classes("base-header-shadow")).toBe(false)
    })
    it("base-header-shadow class exists when height less than 600", async () => {
        await wrapper.setProps({ height: 599 })

        expect(wrapper.classes("base-header-shadow")).toBe(true)
    })
    it("base-content-container-responsive class not exists when height less than 200", async () => {
        await wrapper.setProps({ height: 199 })

        expect(wrapper.find(".base-content-container")
            .classes("base-content-container-responsive")).toBe(false)
    })
    it("base-content-container-responsive class exists when height is 200 or more", async () => {
        await wrapper.setProps({ height: 200 })

        expect(wrapper.find(".base-content-container")
            .classes("base-content-container-responsive")).toBe(true)
    })
    it("emits searchRecipes work correctly", async () => {
        const recipeName = "parmesan chicken cutlets"
        wrapper.vm.$emit("searchRecipes", recipeName)

        await wrapper.vm.$nextTick()

        expect(wrapper.emitted().searchRecipes[0]).toEqual([recipeName])
    })
    it("emits clickFilterButton work correctly", async () => {
        wrapper.vm.$emit("clickFilterButton")

        await wrapper.vm.$nextTick()

        expect(wrapper.emitted().clickFilterButton).toBeTruthy()
    })
})

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
})

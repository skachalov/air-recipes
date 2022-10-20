import { mount } from "@vue/test-utils"
import BaseInfo from "@/components/UI/BaseInfo"

describe("BaseInfo.vue", () => {
    const wrapper = mount(BaseInfo)

    it("renders props when passed", async () => {
        const text = "Hard"
        const iconName = "mdi-chef-hat"
        const color = "red"

        await wrapper.setProps({ text, iconName, color })

        expect(wrapper.props().text).toBe(text)
        expect(wrapper.props().iconName).toBe(iconName)
        expect(wrapper.props().color).toBe(color)
    })
    it("sets inline colors when props.color passed", async () => {
        const color = "green"

        await wrapper.setProps({ color })

        expect(wrapper.find(".base-info").attributes("style")).toContain(`color: ${color};`)
        expect(wrapper.find(".base-info-icon").attributes("style")).toContain(`color: ${color};`)
    })
})
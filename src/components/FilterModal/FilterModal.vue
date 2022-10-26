<template>
    <v-container
        class="container"
        @click.self="closeModal"
        fluid
    >
        <v-container class="modal">
            <filter-modal-header @closeModal="closeModal"/>

            <base-progress
                v-if="!isLoaded"
            />

            <div v-else>
                <v-row class="justify-center">
                    <base-checkbox
                        v-for="cuisine in cuisines"
                        :key="cuisine.id"
                        :val="cuisine"
                        :selected="selectedCuisines"
                        @updateSelected="updateSelected"
                    />
                </v-row>

                <v-row class="modal-slider">
                    <base-slider
                        style="height: 32px"
                        :range="localStorageRepository.getCaloricityDefault()"
                        :selected="chosenCaloricity"
                        @updateSelectedRange="updateSelectedRange"
                    />
                    <div>Calories, kCal</div>
                </v-row>

                <filter-modal-footer
                    :show-clear-btn="showClearBtn"
                    @clearParams="clearParams"
                    @showRecipes="showRecipes"
                />
            </div>
        </v-container>
    </v-container>
</template>

<script setup>
    import { defineProps, defineEmits } from "vue"
    import BaseCheckbox from "@/components/UI/BaseCheckbox"
    import BaseSlider from "@/components/UI/BaseSlider"
    import FilterModalHeader from "@/components/FilterModal/FilterModalHeader"
    import FilterModalFooter from "@/components/FilterModal/FilterModalFooter"
    import BaseProgress from "@/components/UI/BaseProgress"
    import { localStorageRepository } from "@/services/localStorageRepository"

    defineProps({
        isLoaded: {
            type: Boolean,
            default: false
        },
        cuisines: Array,
        selectedCuisines: Array,
        caloricityRange: Array,
        chosenCaloricity: Array,
        showClearBtn: Boolean
    })

    const emits =
        defineEmits(["closeModal", "clearParams", "showRecipes", "updateSelected", "updateSelectedRange"])

    function closeModal() {
        emits("closeModal")
    }

    function clearParams() {
        emits("clearParams")
    }

    function showRecipes() {
        emits("showRecipes")
    }

    function updateSelected(val) {
        emits("updateSelected", val)
    }

    function updateSelectedRange(val) {
        emits("updateSelectedRange", val)
    }
</script>

<style lang="scss" scoped>
    .container {
        position: fixed;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        z-index: 3;
        background-color: rgba($base1, 0.8);
    }

    .modal {
        position: fixed;
        height: 558px;
        width: 440px;
        background-color: $base1;
        z-index: 4;
        box-shadow: 0px 16px 24px 0px rgba($base0, 0.14);

        @media (max-width: 470px) {
            width: 350px;
        }
    }

    .modal-slider {
        padding-top: 72px;
        width: 90%;
        margin: 0 auto;
        display: block;
    }
</style>
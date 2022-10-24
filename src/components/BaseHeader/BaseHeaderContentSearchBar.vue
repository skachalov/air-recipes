<template>
    <v-row class="align-center text">
        <v-col class="v-col-md-8 v-col-sm-9">
            <base-input
                class="input-container"
                v-model="searchLine"
                @keydown.enter="searchRecipes"
                @clearButtonClicked="clearButtonClicked"
            />
        </v-col>
        <v-col class="v-col-md-4 v-col-sm-3 filter-button-container">
            <base-filter-button @click="clickFilterButton"/>
        </v-col>
    </v-row>
</template>

<script setup>
    import BaseFilterButton from "@/components/UI/BaseFilterButton"
    import BaseInput from "@/components/UI/BaseInput"
    import { ref, defineEmits } from "vue"

    const searchLine = ref("")
    const emits = defineEmits(['clickFilterButton', 'searchRecipes'])

    function clickFilterButton() {
        emits('clickFilterButton')
    }

    function searchRecipes() {
        emits('searchRecipes', searchLine.value)
    }

    function clearButtonClicked() {
        searchRecipes()
    }
</script>

<style lang="scss" scoped>
    .sticky-header-search-bar {
        margin-bottom: 1%;
        justify-content: end;
    }

    .text {
        @media (max-width: 948px) {
            display: flex;
            align-content: start;
            justify-content: center;
        }
    }

    .input-container {
        @media (max-width: 948px) {
            max-width: 400px !important;
        }
        @media (max-width: 600px) {
            max-width: 300px !important;
        }
        @media (max-width: 450px) {
            max-width: 200px;
        }
    }

    .filter-button-container {
        @media (max-width: 600px) {
            max-width: 27%;
        }
        @media (max-width: 450px) {
            max-width: 23%;
        }
    }
</style>
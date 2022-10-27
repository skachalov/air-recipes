<template>
    <v-container
        class="pt-0 ps-0 pe-0 pb-16"
        fluid
    >
        <v-container
            class="main-page-container"
            fluid
        >
            <base-progress
                id="main-page-base-progress"
                v-if="!$store.state.recipes.recipes.length"
                :warning="'Getting recipes list...'"
            />
            <base-warning
                id="main-page-base-warning"
                v-else-if="!getRecipes.length"
                :warn="'Recipes with these parameters not found'"
            />
            <v-row>
                <base-select
                    :value="sortingType"
                    :options="Object.values(SortingType)"
                    style="margin-left: 10%; margin-top: 20px;"
                    @updateValue="setSortingType"
                />
            </v-row>
            <v-row class="pt-8 cards-container">
                <transition-group name="base-cards">
                    <base-card
                        class="main-page-base-card"
                        v-for="recipe in getRecipes"
                        :key="recipe.id"
                        :recipe="recipe"
                    />
                </transition-group>
            </v-row>
        </v-container>
    </v-container>
</template>

<script setup>
    import BaseCard from "@/components/UI/BaseCard"
    import BaseProgress from "@/components/UI/BaseProgress"
    import { defineProps, defineEmits } from "vue"
    import BaseWarning from "@/components/UI/BaseWarning"
    import BaseSelect from "@/components/UI/BaseSelect"
    import SortingType from "@/helpers/classes/sorting/SortingType"

    defineProps({
        getRecipes: Array,
        sortingType: String
    })

    const emits = defineEmits(["setSortingType"])

    function setSortingType(sortingType) {
        emits("setSortingType", sortingType)
    }
</script>

<style lang="scss" scoped>
    .cards-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, 370px);
        grid-gap: 0.25em;
        justify-content: center;

        @media(max-width: 390px) {
          margin-left: 0;
          margin-right: 0;
        }
    }

    .main-page-container {
      padding-left: 0;
      padding-right: 0;
    }

    .base-cards-item {
        display: inline-block;
    }

    .base-cards-leave-active {
        position: absolute;
    }

    .base-cards-enter-active,
    .base-cards-leave-active {
        transition: all .7s ease;
    }

    .base-cards-enter-from,
    .base-cards-leave-to {
        opacity: 0;
        transform: translateY(-30px);
    }
</style>

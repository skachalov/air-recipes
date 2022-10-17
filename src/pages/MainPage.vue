<template>
    <v-container
        class="pt-0 ps-0 pe-0 pb-16"
        fluid
    >
        <v-container
            class="main-page-container ps-16 pe-16"
            fluid
        >
            <base-progress
                v-if="!$store.state.recipes.recipes.length"
                :warning="'Getting recipes list...'"
            />
            <base-warning
                v-else-if="!getRecipes.length"
                :warn="'Recipes with this parameters not found'"
            />
            <v-row class="pt-8 cards-container">
                <transition-group name="base-cards">
                    <base-card
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
    import { defineProps } from "vue"
    import BaseWarning from "@/components/UI/BaseWarning";

    defineProps({
        getRecipes: Array
    })
</script>

<style lang="scss" scoped>
    .cards-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
        grid-gap: 0.25em;

        @media(max-width: 390px) {
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
    }

    .main-page-container {
      padding-left: 0 !important;
      padding-right: 0 !important;
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

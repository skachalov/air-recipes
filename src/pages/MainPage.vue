<template>
    <v-container
        class="pt-0 ps-0 pe-0 pb-16"
        fluid
    >
        <v-container
            class="ps-16 pe-16"
            fluid
        >
            <base-progress
                v-if="!$store.state.recipes.recipes.length"
                :warning="'Getting recipes list...'"
            />
            <base-warning
                v-else-if="!getRecipes.length"
                :warn="'Recipes not found'"
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

<style scoped>
    .cards-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
        grid-gap: 0.25em;
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
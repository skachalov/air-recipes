<template>
    <v-card
        class="mx-auto base-card mb-6"
        width="348"
        height="384"
        @click.passive="$router.push(`${recipe.id}`)"
    >
        <v-img
            :src=recipe.thumbnail
            height="200"
            cover
        >
            <v-item-group
                style="display: flex"
                class="fill-height justify-end align-end pr-4 pb-4"
            >
                <base-chip :text="formatTime(recipe.cookTime)"/>
                <base-chip
                    class="mr-2 ml-2"
                    :text="recipe.caloricity + 'kCal'"
                />
                <base-chip :text="recipe.cuisine.title"/>
            </v-item-group>
        </v-img>
        <v-card-title class="base-card-title mt-6 pt-0 pl-6 pr-6 text-wrap">
            <h3>{{ recipe.title }}</h3>
        </v-card-title>
        <v-card-text class="base-card-description pl-6 pr-6">
            {{ cutWord(recipe.description) }}
        </v-card-text>
    </v-card>
</template>

<script setup>
    import formatTime from "@/helpers/formatTime"
    import cutWord from "@/helpers/cutWord"
    import BaseChip from "@/components/UI/BaseChip"
    import { defineProps } from "vue"

    defineProps({
        recipe: Object
    })
</script>

<style lang="scss" scoped>
    .base-card {
        cursor: pointer;
        transition: transform .5s;

        @media (max-width: 600px) {
            height: 425px !important;
        }
    }

    .base-card-title {
        font-family: 'Gilroy ExtraBold';
        font-size: 24px;

        @media (max-width: 500px) {
            font-size: 20px;
        }
    }

    .base-card-description {
        @media (max-width: 500px) {
            font-size: 14px;
        }
    }

    .base-card:hover {
        transform: translateY(-5px);
    }
</style>
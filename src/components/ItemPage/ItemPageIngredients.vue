<template>
    <v-row class="flex-column">
        <v-row class="ingredients-title mb-6">
            <h3>Ingredients</h3>
        </v-row>
        <v-row>
            <ul class="ps-4">
                <base-ingredient
                    v-for="ingredient in ingredients"
                    :key="ingredient"
                    :ingredient="ingredient"
                />
            </ul>
        </v-row>
    </v-row>
</template>

<script setup>
import {defineProps} from "vue"
import BaseIngredient from "@/components/UI/BaseIngredient";

defineProps({
    ingredients: Array
})
</script>

<style scoped>
.ingredients-title {
    font-size: 24px;
    font-family: "Gilroy ExtraBold";
}
</style>
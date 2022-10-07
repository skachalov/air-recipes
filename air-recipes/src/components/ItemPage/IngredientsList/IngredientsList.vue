<template>
  <v-row class="flex-column">
    <v-row class="ingredients-title mb-6">
      <h3>Ingredients</h3>
    </v-row>
    <v-row>
      <ul>
        <ingredient-item
          v-for="ingredient in ingredients"
          :key="ingredient"
          :ingredient="ingredient"
        />
      </ul>
    </v-row>
  </v-row>
</template>

<script setup>
  import { defineProps } from "vue"
  import IngredientItem from "@/components/ItemPage/IngredientsList/IngredientItem";

  defineProps({
    ingredients: Array
  })
</script>

<style scoped>
  .ingredients-title {
    font-size: 24px;
  }
</style>
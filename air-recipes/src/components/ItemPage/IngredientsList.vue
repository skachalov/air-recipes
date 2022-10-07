<template>
  <v-row class="flex-column">
    <v-row class="ingredients-title mb-6">
      <h3>Ingredients</h3>
    </v-row>
    <v-row class="ingredients-list">
      <ul>
        <li
          v-for="ingredient in ingredients"
          :key="ingredient"
          class="mb-3"
        >
          {{ ingredient }}
        </li>
      </ul>
    </v-row>
  </v-row>
</template>

<script setup>
  import { defineProps } from "vue"

  defineProps({
    ingredients: Array
  })
</script>

<style scoped>
  .ingredients-title {
    font-size: 24px;
  }
</style>
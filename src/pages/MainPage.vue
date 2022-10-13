<template>
  <v-container class="pt-0 ps-0 pe-0 pb-16" fluid>
    <v-container class="ps-16 pe-16" fluid>
      <base-progress v-if="!getRecipes.length" />
      <v-row
          v-else
          class="pt-8 justify-center"
      >
        <base-card
            v-for="recipe in getRecipes"
            :key="recipe.id"
            :recipe="recipe"
        />
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
import BaseCard from "@/components/MainPage/BaseCard/BaseCard"
import BaseProgress from "@/components/BaseProgress"
import { defineProps } from "vue"

defineProps({
  getRecipes: Array
})
</script>
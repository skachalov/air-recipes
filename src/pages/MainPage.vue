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
      <v-row class="pt-8 justify-center">
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
  import BaseCard from "@/components/MainPage/BaseCard"
  import BaseProgress from "@/components/UI/BaseProgress"
  import { defineProps } from "vue"

  defineProps({
    getRecipes: Array
  })
</script>

<style scoped>
  .base-cards-item {
    display: inline-block;
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
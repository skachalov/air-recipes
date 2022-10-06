<template>
  <v-row style="display: block">
    <v-row class="info-title">
      <h2>
        {{ title }}
      </h2>
    </v-row>

    <v-row class="info-description">
      {{ description }}
    </v-row>

    <v-row>
      <base-info
          :icon-name="'mdi-chef-hat'"
          :color="defineColor(difficulty)">
        {{ difficulty }}
      </base-info>
      <base-info
          :icon-name="'mdi-clock-outline'">
        {{ formatTime(time) }}
      </base-info>
      <base-info
          :icon-name="'mdi-fire'">
        {{ caloricity }} kCal
      </base-info>
      <base-info
          :icon-name="'mdi-web'">
        {{ cuisine }}
      </base-info>
    </v-row>
  </v-row>
</template>

<script setup>
  import formatTime from "@/helpers/formatTime"
  import { defineProps } from "vue"
  import BaseInfo from "@/components/ItemPage/BaseInfo"

  defineProps({
    title: String,
    description: String,
    difficulty: String,
    time: Number,
    caloricity: Number,
    cuisine: String
  })

  function defineColor(difficulty) {
    switch (difficulty) {
      case "Easy":
        return "#2FB65D"
      case "Medium":
        return "#EB8A31"
      case "Hard":
        return "#EB3C31"
    }
  }
</script>

<style scoped>
  .info-title {
    font-size: 40px;
  }
  .info-description {
    margin-top: 16px;
    margin-bottom: 24px;
  }
</style>
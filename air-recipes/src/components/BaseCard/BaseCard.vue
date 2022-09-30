<template>
  <v-card
      class="mx-auto"
      max-width="348"
      height="384"
      style="cursor: pointer"
      :class="{'on-hover': hover}"
      :elevation="hover ? 16 : 2"
      @click="pushIdToUrl"
  >
    <v-img
        :src=recipe.thumbnail
        height="200px"
        cover
    >
      <v-item-group
          style="display: flex"
          class="fill-height justify-end align-end pr-4 pb-4"
      >
        <base-chip>
          {{formatTime(recipe.cookTime)}}
        </base-chip>
        <base-chip class="mr-2 ml-2">
          {{recipe.caloricity}} kCal
        </base-chip>
        <base-chip>
          {{recipe.cuisine.title}}
        </base-chip>
      </v-item-group>
    </v-img>
    <v-card-title
        class="mt-6 pt-0 pl-6 pr-6"
    >
      <h3>{{recipe.title}}</h3>
    </v-card-title>
    <v-card-subtitle
        class="text-black pl-6 pr-6"
        style="opacity: 1"
    >
      {{recipe.description}}
    </v-card-subtitle>
  </v-card>
</template>

<script setup>
  import { defineProps } from "vue"
  import { useRoute } from "vue-router"
  import BaseChip from "@/components/BaseCard/BaseChip"

  defineProps({
    recipe: Object
  })

  function formatTime(time) {
    return time / 60 <= 60
      ? `${formatNumber(time / 60)} min`
      : `${formatNumber(time / 60 / 60)} hours`
  }

  function formatNumber(number) {
    return Number.isInteger(number)
      ? number
      : number.toFixed(1)
  }

  const route = useRoute()

  function pushIdToUrl() {
    console.log(route.params)
  }
</script>
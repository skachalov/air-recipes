<template>
  <v-card
      class="mx-auto base-card"
      :class="{'evelate': mouseoverCard}"
      width="348"
      height="384"
      @mouseover="mouseoverCard = true"
      @mouseleave="mouseoverCard = false"
      @click="pushIdToUrl"
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
  import { ref, defineProps } from "vue"
  import BaseChip from "@/components/BaseCard/BaseChip"
  import formatTime from "@/helpers/formatTime"

  defineProps({
    recipe: Object
  })

  const mouseoverCard = ref(false)
</script>

<style scoped>
  .base-card {
    cursor: pointer;
    transition: .3s
  }
  .evelate {
    transform: translateY(-5px);
  }
</style>
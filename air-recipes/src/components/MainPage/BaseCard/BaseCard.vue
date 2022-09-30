<template>
  <v-card
      class="mx-auto base-card ms-3 me-3 mb-6"
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
        class="mt-6 pt-0 pl-6 pr-6 text-wrap"
    >
      <h3>{{recipe.title}}</h3>
    </v-card-title>
    <v-card-text
        class="pl-6 pr-6 text-break"
        style="font-size: 16px"
    >
      {{curWord(recipe.description)}}
    </v-card-text>
  </v-card>
</template>

<script setup>
  import { ref, defineProps } from "vue"
  import BaseChip from "@/components/MainPage/BaseCard/BaseChip"
  import formatTime from "@/helpers/formatTime"
  import curWord from "@/helpers/curWord";

  defineProps({
    recipe: Object
  })

  const mouseoverCard = ref(false)
</script>

<style scoped>
  .base-card {
    cursor: pointer;
    transition: .5s
  }
  .evelate {
    transform: translateY(-5px);
  }
</style>
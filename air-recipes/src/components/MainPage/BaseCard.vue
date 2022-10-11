<template>
    <v-card
        class="mx-auto base-card ms-3 me-3 mb-6"
        :class="{'evelate': mouseoverCard}"
        width="348"
        height="384"
        @mouseover="mouseoverCard = true"
        @mouseleave="mouseoverCard = false"
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
          style="font-family: 'Gilroy ExtraBold'; font-size: 24px"
      >
        <h3>{{ recipe.title }}</h3>
      </v-card-title>
      <v-card-text
          class="pl-6 pr-6 text-break"
          style="font-size: 16px"
      >
        {{ cutWord(recipe.description) }}
      </v-card-text>
    </v-card>
</template>

<script setup>
  import { ref, defineProps } from "vue"
  import BaseChip from "@/components/UI/BaseChip"
  import formatTime from "@/helpers/formatTime"
  import cutWord from "@/helpers/cutWord";

  defineProps({
    recipe: Object
  })

  const mouseoverCard = ref(false)
</script>

<style lang="scss" scoped>
  .base-card {
    cursor: pointer;
    transition: transform .5s;

    @media (max-width: 600px) {
      height: 425px !important;
    }
  }
  .evelate {
    transform: translateY(-5px);
  }
</style>
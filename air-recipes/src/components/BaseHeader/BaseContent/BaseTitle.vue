<template>
    <v-row
        style="height: 104px; width: 331px;"
        class="ma-0"
    >
      <v-row
          style="height: 80px; width: 100%"
          class="ma-0 justify-center"
      >
        <app-title />
      </v-row>
      <v-row
          class="ma-0"
      >
        <span
            style="width: 100%"
            class="description"
        >
          Best Recipes for Best People
        </span>
      </v-row>
    </v-row>
</template>

<script setup>
  import { defineProps } from "vue"
  import AppTitle from "@/components/BaseHeader/BaseContent/AppTitle";

  defineProps({
    height: Number
  })
</script>

<style lang="scss" scoped>
  .description {
    font-family: Roboto;
    color: #82786A;
  }
  .padding {
    padding-left: 98px;
  }
</style>
<template>
    <v-container
        class="pa-0"
        :style="{ height: height + 'px'}"
        fluid
    >
      <v-row class="ma-0 position-relative">
        <v-col class="pa-0" cols="4">
          <base-content :height="height" />
        </v-col>

        <v-col cols="8"
               class="image-container pa-0 overflow-hidden"
               :style="{ height: height + 'px' }"
        >
          <header-image />
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup>
  import BaseContent from "@/components/MainPage/BaseHeader/BaseContent/BaseContent";
  import HeaderImage from "@/components/MainPage/BaseHeader/HeaderImage";
  import { defineProps } from "vue"

  defineProps({
    height: Number
  })

</script>

<style scoped>
  .image-container {
    width: 100%;
    display: flex;
    align-items: center;
  }
</style>
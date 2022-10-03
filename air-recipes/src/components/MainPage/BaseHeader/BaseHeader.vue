<template>
    <v-container
        class="pa-0 bg-white"
        :style="{ height: height + 'px'}"
        :class="{ 'sticky-header': height <= 400 }"
        fluid
    >
      <v-row class="ma-0 position-relative">
        <v-col
            class="pa-0"
            :class="{ 'v-col-4': height > 400,
            'v-col-11': height <= 400 }"
        >
          <base-content :height="height" />
        </v-col>
        <v-col
               class="image-container pa-0 overflow-hidden"
               :class="{ 'v-col-8': height > 400 }"
               v-show="height > 400"
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
  .sticky-header {
    position: fixed;
    top: -272px;
    z-index: 1;
  }
  .image-container {
    width: 100%;
    display: flex;
    align-items: center;
  }
</style>
<template>
  <div class="base-carousel">
    <v-carousel
        v-model="activeImage"
        class="carousel"
        :show-arrows="false"
        hide-delimiters
    >
      <v-carousel-item
          v-for="image in images"
          :key="image"
          :src="image"
          cover
      />
    </v-carousel>

    <div class="thumb-container">
      <base-thumb
        v-for="(image, idx) in images"
        :key="image"
        :is-active="idx === activeImage"
        :image="image"
        @click="() => changeActiveImage(idx)"
      />
    </div>
  </div>
</template>

<script setup>
  import { defineProps, ref } from "vue"
  import BaseThumb from "@/components/ItemPage/BaseCarousel/BaseThumb";

  defineProps({
    images: Array
  })

  let activeImage = ref(0)

  function changeActiveImage(idx) {
    activeImage.value = idx
  }
</script>

<style scoped>
  .base-carousel {
    position: relative;
    width: 532px;
    height: 427px;
  }
  .carousel {
    height: 355px !important;
  }
  .thumb-container {
    display: flex;
    position: absolute;
    bottom: 0;
  }
</style>
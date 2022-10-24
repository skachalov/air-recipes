<template>
  <img
      :src="image"
      class="base-header-image"
  />
</template>

<script setup>
import image from "@/assets/images/headerImage.png"
</script>

<style lang="scss" scoped>
  .base-header-image {
    transform: scaleX(-1);
    width: 86%;
    right: 0;
    position: absolute;

    @media(max-width: 1400px) {
      right: -100px;
    }

    @media(max-width: 1080px) {
      right: -140px;
    }
  }
</style>
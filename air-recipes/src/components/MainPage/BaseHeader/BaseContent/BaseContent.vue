<template>
  <v-container class="pa-0">
    <v-row
        :class="{ 'fixed-content': height >= 500, 'sticky-bottom-content': height < 500 }"
    >
      <base-title />
      <search-bar />
    </v-row>
  </v-container>
</template>

<script setup>
  import BaseTitle from "@/components/MainPage/BaseHeader/BaseContent/BaseTitle";
  import SearchBar from "@/components/MainPage/BaseHeader/BaseContent/SearchBar/SearchBar";
  import { defineProps } from "vue"

  defineProps({
    height: Number
  })
</script>

<style scoped>
  .fixed-content {
    margin-top: 128px;
    margin-left: 98px;
    position: fixed;
    height: 192px;
    width: 348px;
  }
  .sticky-bottom-content {
    position: absolute;
    height: 192px;
    width: 348px;
    bottom: 0;
    margin-left: 98px;
  }
</style>

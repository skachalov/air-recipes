<template>
  <v-container class="pa-0">
    <v-row class="content">
      <base-title />
      <search-bar />
    </v-row>
  </v-container>
</template>

<script setup>
  import BaseTitle from "@/components/MainPage/BaseHeader/BaseContent/BaseTitle";
  import SearchBar from "@/components/MainPage/BaseHeader/BaseContent/SearchBar/SearchBar";
</script>

<style scoped>
  .content {
    margin-top: 128px;
    margin-left: 98px;
    height: 192px;
    width: 348px;
  }
</style>

<template>
    <v-container class="pa-0 overflow-hidden bg-red" fluid>
      <v-row class="ma-0">
        <v-col class="pa-0" cols="4">
          <base-content />
        </v-col>
        <v-col cols="8" class="image-container bg-blue pa-0">
          <header-image />
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup>
import BaseContent from "@/components/MainPage/BaseHeader/BaseContent/BaseContent";
import HeaderImage from "@/components/MainPage/BaseHeader/HeaderImage";
</script>

<style scoped>
  .image-container {
    width: 100%;
    height: 584px;
    display: flex;
    align-items: center;
  }
</style>
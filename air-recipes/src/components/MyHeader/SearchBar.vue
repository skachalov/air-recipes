<template>
  <v-row class="align-end">
    <v-col cols="9">
      <my-input />
    </v-col>
    <v-col cols="3">
      <filter-button />
    </v-col>
  </v-row>
</template>

<script setup>
import FilterButton from "@/components/MyHeader/FilterButton";
import MyInput from "@/components/MyHeader/MyInput";
</script>
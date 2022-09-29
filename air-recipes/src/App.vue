<template>
  <v-app>
    <v-main>
      <my-input v-model="refStr" />
      <filter-button />
    </v-main>
  </v-app>
</template>

<script setup>
import MyInput from "@/components/MyInput"
import FilterButton from "@/components/FilterButton"
import {ref} from "vue";

const refStr = ref("")
</script>

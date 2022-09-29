<template>
  <v-app>
    <v-main>
      <my-input v-model="refStr" />
    </v-main>
  </v-app>
</template>

<script setup>
import MyInput from "@/components/MyInput"
import {ref} from "vue";

const refStr = ref("")
</script>

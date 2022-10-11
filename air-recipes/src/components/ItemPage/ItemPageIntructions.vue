<template>
  <v-row class="flex-column">
    <v-row class="instructions-title mb-6">
      <h3>Instructions</h3>
    </v-row>
    <v-row>
      <ul>
        <base-instruction
            v-for="instruction in instructions"
            :key="instruction"
            :instruction="instruction"
            :idx="instructions.indexOf(instruction)"
        />
      </ul>
    </v-row>
  </v-row>
</template>

<script setup>
  import BaseInstruction from "@/components/UI/BaseInstruction"
  import { defineProps } from "vue"

  defineProps({
    instructions: Array
  })
</script>

<style scoped>
  .instructions-title {
    font-size: 24px;
    font-family: "Gilroy ExtraBold";
  }
</style>
<template>
  <v-row class="flex-column">
    <v-row class="instructions-title mb-6">
      <h3>Instructions</h3>
    </v-row>
    <v-row>
      <ul>
        <instruction-item
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
  import InstructionItem from "@/components/ItemPage/InstructionsList/InstructionItem"
  import { defineProps } from "vue"

  defineProps({
    instructions: Array
  })
</script>

<style scoped>
  .instructions-title {
    font-size: 24px;
  }
</style>
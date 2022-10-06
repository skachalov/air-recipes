<template>
  <v-row class="modal-buttons">
    <v-col class="clear-btn">
      <base-button
          :is-dark="false"
          @click="clearParams"
      >
        CLEAR
      </base-button>
    </v-col>
    <v-col class="show-btn">
      <base-button
          :is-dark="true"
          @click="showRecipes"
      >
        SHOW RECIPES
      </base-button>
    </v-col>
  </v-row>
</template>

<script setup>
  import BaseButton from "@/components/FilterModal/ModalButtons/BaseButton"
  import { defineEmits } from "vue"

  const emits = defineEmits(["clearParams", "showRecipes"])

  function clearParams() {
    emits("clearParams")
  }

  function showRecipes() {
    emits("showRecipes")
  }
</script>

<style scoped>
  .modal-buttons {
    position: absolute;
    bottom: 32px;
    width: 98%;
  }
  .clear-btn {
    display: flex;
    justify-content: start;
    padding-left: 28px
  }
  .show-btn {
    display: flex;
    justify-content: end;
    padding-right: 28px;
  }
</style>
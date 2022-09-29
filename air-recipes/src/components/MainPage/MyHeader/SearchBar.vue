<template>
  <v-row class="align-end">
    <v-col cols="9">
      <my-input
          v-model="searchLine"
          @keydown.enter="searchRecipes"
      />
    </v-col>
    <v-col cols="3">
      <filter-button
          @click="switchIsShownModal"
      />
    </v-col>
  </v-row>
</template>

<script setup>
import FilterButton from "@/components/MainPage/MyHeader/FilterButton";
import MyInput from "@/components/MainPage/MyHeader/MyInput";
import { viewModel } from "@/storage";
import { ref } from "vue";

const searchLine = ref("")

function switchIsShownModal() {
  viewModel.getModalViewModel().switchIsShownModal()
}

function searchRecipes() {
  viewModel.getRecipesViewModal().setSearchLine(searchLine.value)
}
</script>
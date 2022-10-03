<template>
  <v-row class="align-end" :class="{ 'sticky-header-search-bar' : height < 400 }" >
    <v-col :class="{ 'v-col-9': height >= 400, 'v-col-4': height < 400 }">
      <base-input
          v-model="searchLine"
          @keydown.enter="searchRecipes"
      />
    </v-col>
    <v-col :class="{ 'v-col-3': height >= 400, 'v-col-2': height < 400 }" >
      <filter-button
          @click="switchIsShownModal"
      />
    </v-col>
  </v-row>
</template>

<script setup>
import FilterButton from "@/components/MainPage/BaseHeader/BaseContent/SearchBar/FilterButton";
import BaseInput from "@/components/MainPage/BaseHeader/BaseContent/SearchBar/BaseInput";
import { viewModel } from "@/storage";
import { ref, defineProps } from "vue";

defineProps({
  height: Number
})

const searchLine = ref("")

function switchIsShownModal() {
  viewModel.getModalViewModel().switchIsShownModal()
}

function searchRecipes() {
  viewModel.getRecipesViewModal().setSearchLine(searchLine.value)
}
</script>

<style scoped>
  .sticky-header-search-bar {
    margin-bottom: 1%;
    justify-content: end;
  }

</style>
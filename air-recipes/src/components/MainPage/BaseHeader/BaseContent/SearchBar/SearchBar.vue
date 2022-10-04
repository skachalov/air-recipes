<template>
  <v-row class="align-end text" :class="{ 'sticky-header-search-bar' : height < 450 }" >
    <v-col :class="{ 'v-col-9': height >= 450, 'v-col-lg-6': height < 450 }" class="v-col-md-8 v-col-sm-6 v-col-xs-7">
      <base-input
          class="input"
          v-model="searchLine"
          @keydown.enter="searchRecipes"
      />
    </v-col>
    <v-col :class="{ 'v-col-3': height >= 450, 'v-col-lg-3': height < 450 }" class="v-col-md-4 v-col-sm-2">
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
  @media (max-width: 960px) {
    .text {
      display: flex;
      align-content: start;
      justify-content: center;
    }
    .input {
      max-width: 400px !important;
    }
  }
  @media (max-width: 600px) {
    .input {
      max-width: 300px !important;
    }
  }
  @media (max-width: 455px) {
    .input {
      max-width: 250px !important;
    }
  }
</style>
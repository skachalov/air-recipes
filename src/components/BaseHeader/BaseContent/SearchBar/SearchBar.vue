<template>
  <v-row
      class="align-end text"
      :class="{ 'sticky-header-search-bar': height < 450 }"
  >
    <v-col
        :class="{ 'v-col-9': height >= 450,
        'v-col-lg-6': height < 450 }"
        class="v-col-md-8 v-col-sm-6 v-col-xs-7"
    >
      <base-input
          class="input-container"
          v-model="searchLine"
          @keydown.enter="searchRecipes"
      />
    </v-col>
    <v-col
        :class="{ 'v-col-3': height >= 450,
        'v-col-lg-3': height < 450 }"
        class="v-col-md-4 v-col-sm-2"
    >
      <filter-button
          @click="clickFilterButton"
      />
    </v-col>
  </v-row>
</template>

<script setup>
  import FilterButton from "@/components/BaseHeader/BaseContent/SearchBar/FilterButton"
  import BaseInput from "@/components/BaseHeader/BaseContent/SearchBar/BaseInput"
  import { ref, defineEmits, defineProps } from "vue"

  defineProps({
    height: Number
  })

  const searchLine = ref("")
  const emits = defineEmits(['clickFilterButton', 'searchRecipes'])

  function clickFilterButton() {
    emits('clickFilterButton')
  }

  function searchRecipes() {
    emits('searchRecipes', searchLine.value)
  }
</script>

<style lang="scss" scoped>
  .sticky-header-search-bar {
    margin-bottom: 1%;
    justify-content: end;
  }
  .text {
    @media (max-width: 960px) {
      display: flex;
      align-content: start;
      justify-content: center;
    }
  }
  .input-container {
    @media (max-width: 960px) {
      max-width: 400px !important;
    }
    @media (max-width: 600px) {
      max-width: 300px !important;
    }
    @media (max-width: 455px) {
      max-width: 250px !important;
    }
  }
</style>
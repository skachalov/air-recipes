<template>
  <filter-modal
      v-if="store.state.modal.isShownModal"
      :cuisines="store.getters.getCuisines"
      :selected-cuisines="store.state.recipes.cuisinesIncludedChosen"
      :caloricity-range="store.state.recipes.caloricityChosen"
      @closeModal="closeModal"
  />
</template>

<script setup>
  import FilterModal from "@/components/FilterModal/FilterModal"
  // import { onMounted } from "vue"
  import { useStore } from "vuex"
  import { viewModel } from "@/storage"

  const store = useStore()


  function closeModal() {
    viewModel.getModalViewModel().switchIsShownModal()
  }
</script>

<style scoped>

</style>
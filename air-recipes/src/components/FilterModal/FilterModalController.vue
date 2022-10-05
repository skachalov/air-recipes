<template>
  <filter-modal
      v-show="store.state.modal.isShownModal"
      @closeModal="closeModal"
  />
</template>

<script setup>
  import FilterModal from "@/components/FilterModal/FilterModal"
  import { useStore } from "vuex"
  import { viewModel } from "@/storage"

  const store = useStore()

  function closeModal() {
    viewModel.getModalViewModel().switchIsShownModal()
  }
</script>

<style scoped>

</style>
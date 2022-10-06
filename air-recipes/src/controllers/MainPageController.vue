<template>
  <main-page
      :getRecipes="store.getters.getRecipes"
      :computeMargin="computeMargin"
      :height="headerHeight"
      @clickFilterButton="switchIsShownModal"
      @searchRecipes="searchRecipes"
  />
</template>

<script setup>
  import MainPage from "@/pages/MainPage"
  import { ref, onMounted, computed } from "vue"
  import { viewModel } from "@/storage"
  import { useStore } from "vuex"

  const store = useStore()
  const DEFAULT_HEADER_HEIGHT = 600
  let headerHeight = ref(600)
  let scrollReaction = ref(true)

  onMounted(() => {
    viewModel.getRecipesViewModal().fetchRecipes()
    window.addEventListener('resize', () => updateWidth())
    updateWidth()
    window.addEventListener('scroll', () => changeHeaderHeight())
  })

  const computeMargin = computed(() => !scrollReaction.value
      ? '75px'
      : headerHeight.value > 460
          ? 0
          : headerHeight.value + 'px')

  function changeHeaderHeight() {
    if (!scrollReaction.value) return

    let scrollVar = window.pageYOffset

    if (scrollVar < 282) {
      headerHeight.value = DEFAULT_HEADER_HEIGHT - scrollVar / 2
    }
    else headerHeight.value = 360
  }

  function updateWidth() {
    if (window.innerWidth <= 1320) {
      if (window.innerWidth <= 960) headerHeight.value = 450
      else headerHeight.value = 360

      scrollReaction.value = false
    }
    else {
      headerHeight.value = DEFAULT_HEADER_HEIGHT
      window.scrollTo(0, 0)

      scrollReaction.value = true
    }
  }

  function switchIsShownModal() {
    viewModel.getModalViewModel().switchIsShownModal()
  }

  function searchRecipes(searchLine) {
    console.log(searchLine)
    viewModel.getRecipesViewModal().setSearchLine(searchLine)
  }
</script>

<style scoped>

</style>
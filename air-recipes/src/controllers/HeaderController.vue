<template>
  <base-header
      :height="headerHeight"
      @clickFilterButton="switchIsShownModal"
      @searchRecipes="searchRecipes"
  />
</template>

<script setup>
  import BaseHeader from "@/components/BaseHeader/BaseHeader"
  import { ref, onMounted, defineEmits } from "vue"
  import { viewModel } from "@/storage"

  const DEFAULT_HEADER_HEIGHT = 600
  let headerHeight = ref(600)
  let scrollReaction = ref(true)

  const emits = defineEmits("changeHeaderHeight", "setScrollReaction")

  onMounted(() => {
    window.addEventListener('resize', () => updateWidth())
    updateWidth()
    window.addEventListener('scroll', () => changeHeaderHeight())
  })

  function changeHeaderHeight() {
    if (!scrollReaction.value) return

    let scrollVar = window.pageYOffset

    if (scrollVar < 282) {
      headerHeight.value = DEFAULT_HEADER_HEIGHT - scrollVar / 2
    }
    else headerHeight.value = 360

    emits("changeHeaderHeight", headerHeight.value)
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

    emits("setScrollReaction", scrollReaction.value)
  }

  function switchIsShownModal() {
    viewModel.getModalViewModel().switchIsShownModal()
  }

  function searchRecipes(searchLine) {
    console.log(searchLine)
    viewModel.getRecipesViewModal().setSearchLine(searchLine)
  }
</script>
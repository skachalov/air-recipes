<template>
  <base-header
      :height="headerHeight"
      :inner-width="innerWidth"
      @clickFilterButton="switchIsShownModal"
      @searchRecipes="searchRecipes"
  />
</template>

<script setup>
  import BaseHeader from "@/components/BaseHeader/BaseHeader"
  import { ref, onMounted, defineEmits } from "vue"
  import { viewModel } from "@/model/viewModelSingleton"

  const DEFAULT_HEADER_HEIGHT = 600
  let headerHeight = ref(600)
  let scrollReaction = ref(true)
  let innerWidth = ref(window.innerWidth)

  const emits = defineEmits("changeHeaderHeight", "changeInnerWidth", "setScrollReaction", "changeScrollVar")

  onMounted(() => {
    window.addEventListener('resize', () => updateWidth())
    updateWidth()
    window.addEventListener('scroll', () => changeHeaderHeight())
  })

  function changeHeaderHeight() {
    if (!scrollReaction.value) return

    let scrollVar = window.pageYOffset

    if (scrollVar <= 328) {
      headerHeight.value = DEFAULT_HEADER_HEIGHT - scrollVar
      emits("changeScrollVar", scrollVar)
    }
    else {
      headerHeight.value = 80
      emits("changeScrollVar", 328)
    }

    console.log(scrollVar, headerHeight.value)

    emits("changeHeaderHeight", headerHeight.value)
  }

  function updateWidth() {
    innerWidth.value = window.innerWidth

    if (innerWidth.value <= 960) {
      headerHeight.value = 160
      scrollReaction.value = false
    }
    else {
      headerHeight.value = DEFAULT_HEADER_HEIGHT
      window.scrollTo(0, 0)
      scrollReaction.value = true
    }

    emits("changeHeaderHeight", headerHeight.value)
    emits("setScrollReaction", scrollReaction.value)
    emits("changeInnerWidth", innerWidth.value)
  }

  function switchIsShownModal() {
    viewModel.getModalViewModel().switchIsShownModal()
  }

  function searchRecipes(searchLine) {
    viewModel.getRecipesViewModal().setSearchLine(searchLine)
  }
</script>
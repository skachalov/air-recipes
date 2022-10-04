<template>
  <v-container class="pt-0 ps-0 pe-0 pb-16" fluid>
    <base-header :height="headerHeight" />
    <v-container class="ps-16 pe-16" fluid>
      <base-progress v-if="!store.state.recipes.recipes.length" />
      <v-row
          v-else
          class="pt-8 justify-center"
          :style="{ 'margin-top': computeMargin }"
      >
        <base-card
            v-for="recipe in store.getters.getRecipes"
            :key="recipe.id"
            :recipe="recipe"
        />
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
  import BaseHeader from "@/components/MainPage/BaseHeader/BaseHeader"
  import BaseCard from "@/components/MainPage/BaseCard/BaseCard"
  import BaseProgress from "@/components/BaseProgress"
  import { onMounted, computed, ref } from "vue"
  import { useStore } from "vuex"
  import { viewModel } from "@/storage"

  const store = useStore()

  onMounted(() => {
    viewModel.getRecipesViewModal().fetchRecipes()
    window.addEventListener('resize', updateWidth)
    updateWidth()
    window.addEventListener('scroll', changeHeaderHeight)
  })

  let scrollReaction = ref(true)
  const computeMargin = computed(() =>
      !scrollReaction.value ? '75px' : headerHeight.value > 460 ? 0 : headerHeight.value + 'px')

  const DEFAULT_HEADER_HEIGHT = 600
  let headerHeight = ref(DEFAULT_HEADER_HEIGHT)

  function changeHeaderHeight() {
    if (!scrollReaction.value) return

    let scrollVar = window.pageYOffset
    if (scrollVar < 282) headerHeight.value = DEFAULT_HEADER_HEIGHT - scrollVar / 2
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
</script>
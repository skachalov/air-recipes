<template>
  <v-container class="pt-0 ps-0 pe-0" fluid>
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

    if (window.innerWidth <= 1320) {
      headerHeight.value = 360
      scrollReaction = false
    }

    window.addEventListener('scroll', changeHeaderHeight)
  })

  const DEFAULT_HEADER_HEIGHT = 600
  let scrollReaction = true
  let headerHeight = ref(DEFAULT_HEADER_HEIGHT)

  // const computeMargin = computed(() => {
  //   console.log(1 + " " + scrollReaction)
  //
  //   if (!scrollReaction) {
  //     return '100px'
  //   }
  //
  //   return headerHeight.value > 460 ? 0 : headerHeight.value - 10 + 'px'
  // })

  const computeMargin = computed(() => !scrollReaction ? '100px' : headerHeight.value > 460 ? 0 : headerHeight.value - 10 + 'px')

  function changeHeaderHeight() {
    if (!scrollReaction) return

    let scrollVar = window.pageYOffset

    if (scrollVar < 282) headerHeight.value = DEFAULT_HEADER_HEIGHT - scrollVar / 2
    else headerHeight.value = 360
  }

  function updateWidth() {
    if (window.innerWidth <= 1320) {
      if (window.innerWidth <= 960) headerHeight.value = 450
      else headerHeight.value = 360

      scrollReaction = false
    }
    else {
      headerHeight.value = DEFAULT_HEADER_HEIGHT
      window.scrollTo(0, 0)

      scrollReaction = true
    }

    console.log(scrollReaction)
  }
</script>
<template>
  <v-app>
    <v-main >
      <filter-modal-controller
        v-if="$store.state.modal.isShownModal"
      />
      <header-controller
          @changeHeaderHeight="changeHeaderHeight"
          @changeInnerWidth="changeInnerWidth"
          @setScrollReaction="setScrollReaction"
          @changeScrollVar="changeScrollVar"
      />
      <router-view
          :style="{ 'margin-top': computeMargin }"
          :key="$route.fullPath">
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup>
  import FilterModalController from "@/controllers/FilterModalController"
  import HeaderController from "@/controllers/HeaderController"
  import { ref, computed } from "vue";

  let headerHeight = ref(600)
  let scrollVar = ref(0)
  let scrollReaction = ref(true)
  let innerWidth = ref(window.innerWidth)

  const computeMargin = computed(() =>
      scrollReaction.value
          ? headerHeight.value + scrollVar.value + 10 + 'px'
          : '150px'
  )

  function changeHeaderHeight(height) {
    headerHeight.value = height
  }

  function changeInnerWidth(width) {
    innerWidth.value = width
  }

  function setScrollReaction(flag) {
    scrollReaction.value = flag
  }

  function changeScrollVar(scroll) {
    scrollVar.value = scroll
  }
</script>
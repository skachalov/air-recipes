<template>
  <v-app>
    <v-main >
      <filter-modal-controller
        v-if="$store.state.modal.isShownModal"
      />
      <header-controller
          @changeHeaderHeight="changeHeaderHeight"
          @setScrollReaction="setScrollReaction"
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
  let scrollReaction = ref(true)

  const computeMargin = computed(() => !scrollReaction.value
      ? '200px'
      : headerHeight.value > 460
          ? 0
          : headerHeight.value + 30 + 'px'
  )

  function changeHeaderHeight(height) {
    headerHeight.value = height
  }

  function setScrollReaction(flag) {
    scrollReaction.value = flag
  }
</script>
<template>
  <v-app>
    <v-main>
      <transition name="modal">
        <filter-modal-controller v-if="$store.state.modal.isShownModal"/>
      </transition>
      <header-controller
          @changeHeaderHeight="changeHeaderHeight"
          @setScrollReaction="setScrollReaction"
          @changeScrollVar="changeScrollVar"
      />
      <router-view
          class="router-view"
          :style="{ 'margin-top': computeMargin }"
          :key="$route.fullPath">
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup>
  import FilterModalController from "@/controllers/FilterModalController"
  import HeaderController from "@/controllers/HeaderController"
  import { ref, computed } from "vue"

  let headerHeight = ref(600)
  let scrollVar = ref(0)
  let scrollReaction = ref(true)

  const computeMargin = computed(() => !scrollReaction.value
        ? '150px'
        : headerHeight.value + scrollVar.value + 10 + 'px'
  )

  function changeHeaderHeight(height) {
    headerHeight.value = height
  }

  function setScrollReaction(flag) {
    scrollReaction.value = flag
  }

  function changeScrollVar(scroll) {
    scrollVar.value = scroll
  }
</script>

<style scoped>
  .router-view {
    transition: margin-top .5s;

  }
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity .2s ease;
  }

  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
  }
</style>
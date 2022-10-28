<template>
    <v-app class="app-container">
        <v-main>
            <transition name="modal">
                <filter-modal-controller v-if="$store.state.modal.isShownModal"/>
            </transition>
            <header-controller
                @changeHeaderHeight="changeHeaderHeight"
                @setScrollReaction="setScrollReaction"
                @changeScrollVar="changeScrollVar"
            />
            <div
                :style="{ 'padding-top': computePadding }"
                class="router-view-container"
            >
                <router-view
                    :key="$route.fullPath">
                </router-view>
            </div>
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

    const computePadding = computed(() =>
        !scrollReaction.value
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
    .app-container {
        height: 140%;
    }

    .router-view-container {
        transition: .5s;
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

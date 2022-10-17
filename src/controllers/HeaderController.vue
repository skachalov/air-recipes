<template>
<<<<<<< HEAD
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
=======
    <base-header
        :height="headerHeight"
        @clickFilterButton="switchIsShownModal"
        @searchRecipes="searchRecipes"
    />
</template>

<script setup>
    import BaseHeader from "@/components/BaseHeader/BaseHeader"
    import { ref, onMounted, defineEmits } from "vue"
    import { viewModel } from "@/model/viewModelSingleton"
    import { useRoute, useRouter } from "vue-router"

    const DEFAULT_HEADER_HEIGHT = 600
    let headerHeight = ref(600)
    let scrollReaction = ref(true)

    const emits = defineEmits("changeHeaderHeight", "setScrollReaction", "changeScrollVar")

    onMounted(() => {
        window.addEventListener('resize', () => updateWidth())
        updateWidth()
        window.addEventListener('scroll', () => changeHeaderHeight())
    })

    function changeHeaderHeight() {
        if (!scrollReaction.value) return

        let scrollVar = Math.floor(window.pageYOffset)

        if (scrollVar <= 328) {
            headerHeight.value = Math.floor(DEFAULT_HEADER_HEIGHT - scrollVar)
            emits("changeScrollVar", scrollVar)
        } else {
            headerHeight.value = 80
            emits("changeScrollVar", 328)
        }

        emits("changeHeaderHeight", headerHeight.value)
    }

    function updateWidth() {
        let innerWidth = window.innerWidth

        if (innerWidth <= 960) {
            headerHeight.value = 160
            scrollReaction.value = false
        } else {
            window.scrollTo(0, 0)
            headerHeight.value = DEFAULT_HEADER_HEIGHT
            scrollReaction.value = true
        }

        emits("changeHeaderHeight", headerHeight.value)
        emits("setScrollReaction", scrollReaction.value)
    }

    function switchIsShownModal() {
        viewModel.getModalViewModel().switchIsShownModal()
    }

    const route = useRoute()
    const router = useRouter()

    function searchRecipes(searchLine) {
        if (route.path !== '/air-recipes/') {
            router.push('/air-recipes/')
        }

        viewModel.getRecipesViewModal().setSearchLine(searchLine)
    }
>>>>>>> recipes-5-refactoring
</script>
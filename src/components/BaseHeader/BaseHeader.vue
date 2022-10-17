<template>
    <v-container
        class="base-header"
        :style="{ height: height + 'px' }"
        fluid
    >
        <v-row class="ma-0 position-relative">
            <v-col
                class="base-content-container"
                :class="{ 'v-col-lg-4 v-col-md-2 v-col-sm-12': height > 200 }"
            >
                <base-header-content
                    :height="height"
                    @clickFilterButton="clickFilterButton"
                    @searchRecipes="searchRecipes"
                />
            </v-col>
            <v-col
                class="image-container
          v-col-lg-8 v-col-md-10 v-col-sm-12"
                :style="{ height: height + 'px'  }"
                v-if="height > 200"
            >
                <base-header-image/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
    import BaseHeaderContent from "@/components/BaseHeader/BaseHeaderContent"
    import BaseHeaderImage from "@/components/BaseHeader/BaseHeaderImage"
    import { defineProps, defineEmits } from "vue"

    defineProps({
        height: Number
    })

    const emits = defineEmits(['clickFilterButton', 'searchRecipes'])

    function clickFilterButton() {
        emits('clickFilterButton')
    }

    function searchRecipes(searchLine) {
        emits('searchRecipes', searchLine)
    }
</script>

<style lang="scss" scoped>
    .base-header {
        padding: 0;
        background-color: white;
        position: fixed;
        z-index: 2;

        @media(max-width: 390px) {
          max-width: 96% !important;
        }
    }

    .base-content-container {
        padding: 0;
        z-index: 3
    }

    .image-container {
        padding: 0;
        overflow: hidden;
        position: absolute;
        right: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
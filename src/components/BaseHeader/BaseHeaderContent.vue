<template>
    <v-container
        class="pa-0"
        :style="{ height: height + 'px' }"
        fluid
    >
        <v-row
            class="base-header-content"
            :class="{ 'base-header-content-rolled': height <= 200,
             'base-header-content-full': height > 200 }"
        >
            <base-header-content-title :height="height"/>
            <base-header-content-search-bar
                class="s-b"
                :height="height"
                @clickFilterButton="clickFilterButton"
                @searchRecipes="searchRecipes"
            />
        </v-row>
    </v-container>
</template>

<script setup>
    import BaseHeaderContentTitle from "@/components/BaseHeader/BaseHeaderContentTitle"
    import BaseHeaderContentSearchBar from "@/components/BaseHeader/BaseHeaderContentSearchBar"
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
    .base-header-content {
        position: fixed;
        margin-top: 128px;
        margin-left: 98px;
        height: 192px;
        width: 348px;
    }

    .base-header-content-rolled {
        position: relative;
        margin-top: 0;
        margin-left: 4%;
        width: 100%;
        height: 80px;
        animation-duration: .3s;
        animation-name: rolling;

        @media(max-width: 960px) {
            margin-left: 0;
        }
    }

    @keyframes rolling {
        from {
            opacity: 0;
            padding-bottom: 30px;
        }
    }

    .base-header-content-full {
        animation-duration: .3s;
        animation-name: full;
    }

    @keyframes full {
        from {
            opacity: 0;
            padding-top: 30px;
        }
    }
</style>

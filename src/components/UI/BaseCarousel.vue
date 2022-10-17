<template>
    <div class="base-carousel">
        <v-carousel
            v-model="activeImage"
            class="carousel"
            :show-arrows="false"
            hide-delimiters
        >
            <v-carousel-item
                v-for="image in images"
                :key="image"
                :src="image"
                cover
            />
        </v-carousel>

        <div class="thumb-container" v-show="images.length > 1">
            <base-thumb
                v-for="(image, idx) in images"
                :key="image"
                :is-active="idx === activeImage"
                :image="image"
                @click="() => changeActiveImage(idx)"
            />
        </div>
    </div>
</template>

<script setup>
    import { defineProps, ref } from "vue"
    import BaseThumb from "@/components/UI/BaseThumb";

    defineProps({
        images: Array
    })

    let activeImage = ref(0)

    function changeActiveImage(idx) {
        activeImage.value = idx
    }
</script>

<style lang="scss" scoped>
    .base-carousel {
        position: relative;
        width: 532px;
        height: 427px;

        @media(max-width: 730px) {
            width: 400px;
            height: 340px;
        }

        @media(max-width: 600px) {
            width: 350px;
            height: 270px;
        }
    }

    .carousel {
        height: 355px !important;

        @media(max-width: 730px) {
            height: 270px !important;
        }

        @media(max-width: 600px) {
            height: 200px !important;
        }
    }

    .thumb-container {
        display: flex;
        position: absolute;
        bottom: 0;
    }
</style>
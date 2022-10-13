<template>
    <img
        :src="imageURL"
        class="base-header-image"
    />
</template>

<script setup>
    import { imageURL } from "@/const/URL"
</script>

<style lang="scss" scoped>
    .base-header-image {
        transform: scaleX(-1);
        width: 100%;
    }
</style>
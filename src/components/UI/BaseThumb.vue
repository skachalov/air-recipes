<template>
    <div
        class="base-thumb me-2"
        :class="{ 'active-border': isActive }">
        <img :src="image"/>
    </div>
</template>

<script setup>
    import { defineProps } from "vue"

    defineProps({
        image: String,
        isActive: Boolean
    })
</script>

<style scoped>
    .base-thumb {
        height: 56px;
        width: 56px;
        cursor: pointer;
    }

    .base-thumb > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .active-border {
        border: 2px solid black;
    }
</style>
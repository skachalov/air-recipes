<template>
    <li class="mb-3">
        {{ ingredient }}
    </li>
</template>

<script setup>
    import { defineProps } from "vue"

    defineProps({
        ingredient: String
    })
</script>
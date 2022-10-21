<template>
    <li class="mb-3 li-item">
        <div class="count-bullet">{{ idx + 1 }}</div>
        {{ instruction }}
    </li>
</template>

<script setup>
    import { defineProps } from "vue"

    defineProps({
        instruction: String,
        idx: Number
    })
</script>

<style lang="scss" scoped>
    .li-item {
        display: flex;
        align-items: center;
        list-style-type: none;
    }

    .count-bullet {
        min-width: 16px;
        height: 16px;
        border: 1px solid $shade20;
        border-radius: 50%;
        margin-right: 8px;
        display: flex;
        justify-content: center;
        align-self: start;
        margin-top: 3px;
        font-size: 9px;
        font-weight: 700;
    }
</style>
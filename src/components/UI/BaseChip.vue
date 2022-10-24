<template>
    <v-chip
        class="base-chip"
        variant="elevated"
    >
        {{ text }}
    </v-chip>
</template>

<script setup>
    import { defineProps } from "vue"

    defineProps({
        text: String
    })
</script>

<style lang="scss" scoped>
    .base-chip {
        background-color: $base1;
        color: $base0;
        box-shadow: none;
        cursor: pointer;

        @media (max-width: 420px) {
            font-size: 11px;
        }
    }
</style>
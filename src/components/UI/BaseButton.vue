<template>
    <v-btn
        :class="{ dark: isDark, light: !isDark }"
        variant="outlined"
    >
        <slot/>
    </v-btn>
</template>

<script setup>
    import { defineProps } from "vue"

    defineProps({
        isDark: Boolean
    })
</script>

<style lang="scss" scoped>
    @import "@/styles/colors.scss";

    .dark {
        background-color: $shade50;
        color: $base1;
    }

    .light {
        border-color: $shade20;
        color: $shade50;
    }
</style>
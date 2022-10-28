<template>
    <v-select
        class="base-select"
        label="Select sorting"
        :model-value="value"
        :items="options"
        variant="solo"
        @update:modelValue="updateValue"
    />
</template>

<script setup>
import { defineProps, defineEmits } from "vue"

defineProps({
    value: String,
    options: Array
})

const emits = defineEmits(["updateValue"])

function updateValue(newVal) {
    emits("updateValue", newVal)
}
</script>

<style scoped>
    .base-select {
        max-width: 300px;
    }
</style>
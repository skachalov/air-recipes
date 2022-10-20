<template>
    <div class="base-checkbox">
        <label class="text">
            {{ val.title }}
        </label>
        <v-checkbox
            class="checkbox"
            :model-value="selected"
            :value="val.id"
            @click="updateSelected"
        />
    </div>
</template>

<script setup>
    import { defineProps, defineEmits } from "vue"

    const props = defineProps({
        val: Object,
        selected: Array
    })
    const emits = defineEmits(["updateSelected"])

    function updateSelected() {
        emits("updateSelected", props.val.id)
    }
</script>

<style lang="scss" scoped>
    @import "@/styles/colors.scss";

    .base-checkbox {
        width: 90%;
        height: 47px;
        padding-bottom: 11px;
        border-bottom: 1px solid rgba(33, 33, 33, 0.08);
        display: flex;
        justify-content: space-between;
    }

    .text {
        display: flex;
        align-items: end;
        height: 42px;
    }

    .checkbox {
        color: $shade50;
        display: flex;
        justify-content: end;
        align-items: start;
    }
</style>
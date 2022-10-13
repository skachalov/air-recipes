<template>
    <v-responsive
        class="mx-auto rounded-pill border-sm mr-0"
        :class="{'border-opacity-25': inFocus}"
        max-width="276"
        max-height="56"
    >
        <v-text-field
            class="base-input-text-field"
            :value="modelValue"
            @input="updateInput"
            @focus="switchFocus"
            @focusout="switchFocus"
            placeholder="Search"
            variant="solo"
            clearable
            @click:clear="clearInput"
            prepend-inner-icon="mdi-magnify"

        ></v-text-field>
    </v-responsive>
</template>

<script setup>
    import { ref, defineProps, defineEmits } from "vue"

    const inFocus = ref(false)

    function switchFocus() {
        inFocus.value = !inFocus.value
    }

    defineProps({
        modelValue: String
    })
    const emit = defineEmits(["update:modelValue", "clearButtonClicked"])

    function updateInput(event) {
        emit("update:modelValue", event.target.value)
    }

    function clearInput() {
        emit("update:modelValue", "")
        emit("clearButtonClicked")
    }
</script>

<style>
    .base-input-text-field .v-icon {
        color: rgba(169, 169, 169, 1) !important;
    }
</style>
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

    const props = defineProps({
        modelValue: String
    })
    const emit = defineEmits(["update:modelValue", "clearButtonClicked"])

    function updateInput(event) {
        if (event.data === null) {
          emit("update:modelValue", props.modelValue.slice(0, props.modelValue.length - 1))
          return
        }
        emit("update:modelValue", `${props.modelValue}${event.data}`)
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
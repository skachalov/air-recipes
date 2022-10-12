<template>
  <v-container style="height: 400px;">
    <v-row
        class="fill-height"
        align-content="center"
        justify="center"
    >
      <v-col
          class="text-subtitle-1 text-center"
          cols="12"
      >
        {{ warning }}
      </v-col>
      <v-col cols="6">
        <v-progress-linear
            color="teal"
            indeterminate
            rounded
            height="6"
        ></v-progress-linear>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { defineProps } from "vue"

  defineProps({
    warning: String
  })
</script>
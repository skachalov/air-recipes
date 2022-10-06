<template>
  <v-container
      class="container"
      @click.self="closeModal"
      fluid
  >
    <v-container class="modal">
      <v-row style="height: 60px; padding-left: 16px; padding-right: 8px; margin-bottom: 28px">
        <v-col
            cols="10"
            style="font-size: 24px"
        >
          <h3>Filter</h3>
        </v-col>
        <v-col
            class="close-btn"
            cols="2"
        >
          <v-icon
              color="rgba(130, 120, 106, 1)"
              style="cursor: pointer"
          >
            mdi-close
          </v-icon>
        </v-col>
      </v-row>

      <v-row class=" justify-center">
        <base-checkbox
            v-for="cuisine in cuisines"
            :key = "cuisine.id"
            :val = "cuisine.title"
            :selected = "selectedCuisines"
        ></base-checkbox>
      </v-row>

      <v-row style="padding-top: 72px; width: 90%; margin: 0 auto; display: block">
        <base-slider style="height: 32px" :range="caloricityRange" v-model="caloricity" />
        <div>Calories, kCal</div>
      </v-row>

      <v-row style="position: absolute; bottom: 32px; width: 98%;">
        <v-col style="display: flex; justify-content: start; padding-left: 28px">
          <base-button :is-dark="false">CLEAR</base-button>
        </v-col>
        <v-col style="display: flex; justify-content: end; padding-right: 28px">
          <base-button :is-dark="true">SHOW RECIPES</base-button>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
  import { ref, defineProps, defineEmits } from "vue"
  import BaseCheckbox from "@/components/FilterModal/BaseCheckbox";
  import BaseSlider from "@/components/FilterModal/BaseSlider";
  import BaseButton from "@/components/FilterModal/BaseButton";

  defineProps({
    cuisines: Array,
    selectedCuisines: Array,
    caloricityRange: Array
  })

  const caloricity = ref([])

  const emits = defineEmits(['closeModal'])

  function closeModal() {
    emits('closeModal')
  }
</script>

<style scoped>
  .container {
    position: fixed;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    z-index: 3;
    background-color: rgba(255, 255, 255, 0.8);
  }
  .modal {
    position: fixed;
    height: 558px;
    width: 440px;
    background-color: white;
    z-index: 4;
    box-shadow: 0px 16px 24px 0px rgba(0, 0, 0, 0.14);
  }
  .close-btn {
    display: flex;
    justify-content: end;
  }
</style>
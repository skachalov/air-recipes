<template>
  <v-row class="modal-buttons">
    <v-col class="clear-btn">
      <transition name="clear-btn-transition">
        <base-button
            v-if="showClearBtn"
            :is-dark="false"
            @click="clearParams"
        >
          CLEAR
        </base-button>
      </transition>
    </v-col>
    <v-col class="show-btn">
      <base-button
          :is-dark="true"
          @click="showRecipes"
      >
        SHOW RECIPES
      </base-button>
    </v-col>
  </v-row>
</template>

<script setup>
  import BaseButton from "@/components/UI/BaseButton"
  import { defineProps, defineEmits } from "vue"

  defineProps({
    showClearBtn: {
      type: Boolean,
      default: false
    }
  })

  const emits = defineEmits(["clearParams", "showRecipes"])

  function clearParams() {
    emits("clearParams")
  }

  function showRecipes() {
    emits("showRecipes")
  }
</script>

<style scoped>
  .modal-buttons {
    position: absolute;
    bottom: 32px;
    width: 98%;
  }
  .clear-btn {
    display: flex;
    justify-content: start;
    padding-left: 28px
  }
  .show-btn {
    display: flex;
    justify-content: end;
    padding-right: 28px;
  }

  .clear-btn-transition-item {
    display: inline-block;
  }
  .clear-btn-transition-enter-active,
  .clear-btn-transition-leave-active {
    transition: all .5s ease;
  }
  .clear-btn-transition-enter-from,
  .clear-btn-transition-leave-to {
    opacity: 0;
    transform: translateY(-15px);
  }
</style>
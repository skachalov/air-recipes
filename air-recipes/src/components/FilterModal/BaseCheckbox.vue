<template>
  <div class="base-checkbox">
    <label class="text"><slot /></label>
    <v-checkbox class="checkbox" />
  </div>
</template>

<script setup>

</script>

<style scoped>
  .base-checkbox {
    width: 376px;
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
    display: flex;
    justify-content: end;
    align-items: start;
  }
</style>
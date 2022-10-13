<template>
  <v-chip
      class="base-chip"
      variant="filter"
  >
    <slot />
  </v-chip>
</template>

<style lang="scss" scoped>
  .base-chip {
    background-color: white;
    cursor: pointer;

    @media (max-width: 420px) {
      font-size: 11px;
    }
  }
</style>
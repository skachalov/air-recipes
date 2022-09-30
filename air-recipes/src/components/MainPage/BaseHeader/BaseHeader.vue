<template>
    <v-container class="pa-0 overflow-hidden" style="height: 600px" fluid>
      <v-row>
        <v-col class="pa-0" cols="4">
          <base-content />
        </v-col>
        <v-col cols="8">
          <header-image />
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup>
import BaseContent from "@/components/MainPage/BaseHeader/BaseContent/BaseContent";
import HeaderImage from "@/components/MainPage/BaseHeader/HeaderImage";
</script>
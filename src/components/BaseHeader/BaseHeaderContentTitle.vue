<template>
    <v-row
        style="height: 104px; width: 331px;"
        class="base-header-title"
        :class="{ 'base-header-title-rolled': height <= 192 }"
    >
        <v-row
            style="height: 80px; width: 100%"
            class="ma-0 justify-center"
            :class="{ 'full-height': height <= 192 }"
        >
            <h1
                class="title"
                :class="{ 'full-height title-rolled' : height <= 192 }"
            >
              <span
                  style="cursor: pointer"
                  @click="$router.push(mainPageRoute)"
              >
                Air Recipes
              </span>
            </h1>
        </v-row>
        <v-row class="ma-0">
        <span
            style="width: 100%"
            class="description"
            v-if="height > 200"
        >
          Best Recipes for Best People
        </span>
        </v-row>
    </v-row>
</template>

<script setup>
    import { defineProps } from "vue"
    import { mainPageRoute } from "@/const/routes"

    defineProps({
        height: Number
    })
</script>

<style lang="scss" scoped>
    .base-header-title {
        margin: 0;

        @media (max-width: 948px) {
            width: 100% !important;
        }
    }

    .base-header-title-rolled {
        height: 100% !important;
        align-items: center;
    }

    .full-height {
        height: 100%;
    }

    .title {
        font-family: "Gilroy ExtraBold";
        font-size: 64px;
        width: 100%;

        @media(max-width: 948px) {
            width: auto;
        }
        @media (max-width: 600px) {
            font-size: 48px;
        }
    }

    .title-rolled {
        align-items: center;
        display: flex;
    }

    .description {
        font-family: Roboto;
        color: $shade50;
    }

    .padding {
        padding-left: 98px;
    }
</style>
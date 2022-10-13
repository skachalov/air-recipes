<template>
    <v-row style="display: block;">
        <v-row class="info-title">
            <h2>
                {{ title }}
            </h2>
        </v-row>

        <v-row class="info-description">
            {{ description }}
        </v-row>

        <v-row>
            <base-info
                :text="firstLetterToUpper(difficulty)"
                :icon-name="'mdi-chef-hat'"
                :color="defineColor(difficulty)"
            />
            <base-info
                :text="formatTime(cookTime)"
                :icon-name="'mdi-clock-outline'"
            />
            <base-info
                :text="caloricity + 'kCal'"
                :icon-name="'mdi-fire'"
            />
            <base-info
                :text="cuisine"
                :icon-name="'mdi-web'"
            />
        </v-row>
    </v-row>
</template>

<script setup>
    import formatTime from "@/helpers/formatTime"
    import { firstLetterToUpper } from "@/helpers/firstLetterToUpper"
    import { defineProps } from "vue"
    import BaseInfo from "@/components/UI/BaseInfo"

    defineProps({
        title: String,
        description: String,
        difficulty: String,
        cookTime: Number,
        caloricity: Number,
        cuisine: String
    })

    function defineColor(difficulty) {
        switch (difficulty) {
            case "easy":
                return "#2FB65D"
            case "medium":
                return "#EB8A31"
            case "hard":
                return "#EB3C31"
        }
    }
</script>

<style lang="scss" scoped>
    .info-title {
        font-size: 40px;
        font-family: "Gilroy ExtraBold";

        @media(max-width: 600px) {
            font-size: 26px;
        }
    }

    .info-description {
        margin-top: 16px;
        margin-bottom: 24px;
    }
</style>
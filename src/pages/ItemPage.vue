<template>
<<<<<<< HEAD
  <v-container
      class="pt-0 ps-16 pe-16 pb-16 item-page"
      fluid
  >
    <v-container class="pe-16 pb-16" fluid>
      <base-progress v-if="!recipe" />
      <v-row
          v-else
          class="pt-8 justify-center item-container"
      >
        <v-col
            class="info-container"
        >
          <general-info
            :title="recipe.title"
            :description="recipe.description"
            :difficulty="recipe.difficulty"
            :cook-time="recipe.cookTime"
            :caloricity="recipe.caloricity"
            :cuisine="recipe.cuisine.title"
          />
          <ingredients-list
            :ingredients="recipe.ingredients"
            class="mt-12"
          />
          <instructions-list
            :instructions="recipe.instructions"
            class="mt-12"
          />
        </v-col>

        <v-col class="carousel-container">
          <base-carousel
            :images="recipe.images"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
  import BaseProgress from "@/components/BaseProgress"
  import { defineProps } from "vue"
  import GeneralInfo from "@/components/ItemPage/GeneralInfo";
  import IngredientsList from "@/components/ItemPage/IngredientsList/IngredientsList";
  import InstructionsList from "@/components/ItemPage/InstructionsList/InstructionsList";
  import BaseCarousel from "@/components/ItemPage/BaseCarousel/BaseCarousel";

  defineProps({
    recipe: Object
  })
</script>

<style lang="scss" scoped>
  .item-page {
    @media(max-width: 600px) {
      padding-left: 20px !important;
      padding-right: 0 !important;
    }
  }
  .item-container {
    @media(max-width: 1264px) {
      flex-direction: column;
    }
  }
  .carousel-container {
    display: flex;
    justify-content: end;

    @media(max-width: 1264px) {
      justify-content: center;
    }
  }
=======
    <v-container
        class="pt-0 ps-16 pe-16 item-page"
        fluid
    >
        <v-container
            class="pe-16 pb-16"
            fluid
        >
            <base-progress
                v-if="!recipe"
                :warning="'Getting recipe...'"
            />
            <transition name="item-animation">
                <v-row
                    v-if="recipe"
                    class="pt-8 justify-center item-container"
                >
                    <v-col class="info-container">
                        <item-page-info
                            :title="recipe.title"
                            :description="recipe.description"
                            :difficulty="recipe.difficulty"
                            :cook-time="recipe.cookTime"
                            :caloricity="recipe.caloricity"
                            :cuisine="recipe.cuisine.title"
                        />
                        <item-page-ingredients
                            :ingredients="recipe.ingredients"
                            class="mt-12"
                        />
                        <item-page-instructions
                            :instructions="recipe.instructions"
                            class="mt-12"
                        />
                    </v-col>

                    <v-col class="carousel-container">
                        <base-carousel :images="recipe.images"/>
                    </v-col>
                </v-row>
            </transition>
        </v-container>
    </v-container>
</template>

<script setup>
    import BaseProgress from "@/components/UI/BaseProgress"
    import ItemPageInfo from "@/components/ItemPage/ItemPageInfo"
    import ItemPageIngredients from "@/components/ItemPage/ItemPageIngredients"
    import ItemPageInstructions from "@/components/ItemPage/ItemPageIntructions"
    import BaseCarousel from "@/components/UI/BaseCarousel"
    import { defineProps } from "vue"

    defineProps({
        recipe: Object
    })
    </script>

<style lang="scss" scoped>
    .item-page {
        @media(max-width: 600px) {
            padding-left: 20px !important;
            padding-right: 0 !important;
        }
    }

    .item-container {
        @media(max-width: 1264px) {
            flex-direction: column;
        }
    }

    .carousel-container {
        display: flex;
        justify-content: end;

        @media(max-width: 1264px) {
            justify-content: center;
        }
    }

    .item-animation-item {
        display: inline-block;
    }

    .item-animation-enter-active,
    .item-animation-leave-active {
        transition: all .7s ease;
    }

    .item-animation-enter-from,
    .item-animation-leave-to {
        opacity: 0;
        transform: translateY(-30px);
    }
>>>>>>> recipes-5-refactoring
</style>
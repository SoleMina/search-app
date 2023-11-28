<template>
  <MealsComponent :meals="meals" />
</template>

<script setup>
import { onMounted } from "vue";
import { computed } from "@vue/reactivity";
import store from "../store";
import { useRoute } from "vue-router";
import MealsComponent from "../components/MealsComponent";

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);
console.log(meals.value, "meals computed");

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
  console.log(meals.value, "meals");
});
</script>

<style></style>

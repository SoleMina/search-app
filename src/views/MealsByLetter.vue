<template>
  <div>
    <div class="flex justify-center gap-2 mt-2">
      <router-link
        v-for="letter of letters"
        :key="letter"
        :to="{ name: 'byLetter', params: { letter } }"
        @click="searchMeals"
      >
        {{ letter }}
      </router-link>
    </div>
    <MealsComponent :meals="results" :initial="initial" />
  </div>
</template>

<script setup>
import { onMounted, watch } from "vue";
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import store from "../store";
import MealsComponent from "../components/MealsComponent";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const results = computed(() => store.state.mealsByLetter);
let initial = false;

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

function searchMeals() {
  initial = true;
  store.dispatch("searchMealsByLetter", route.params.letter);
}

onMounted(() => {
  if (route.params.letter) {
    searchMeals();
  }
});
</script>

<style></style>

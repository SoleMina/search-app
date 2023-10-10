<template>
  <div>
    <div class="flex justify-center gap-2 mt-2">
      <router-link
        v-for="letter of letters"
        :key="letter"
        @click="searchMeals(letter)"
        :to="{ name: 'byLetter', params: { letter } }"
      >
        {{ letter }}
      </router-link>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4 p-5">
      <MealItem v-if="results" :meals="results" />
      <div v-else>No se encontraron productos con esa letra</div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, onMounted, ref } from "vue";
import MealItem from "../components/MealItem.vue";
import store from "../store";
const props = defineProps({
  letters: Array,
});
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const keyword = ref("");
console.log(props.letters);

const results = computed(() => store.state.mealsByLetter);

function searchMeals(letter) {
  keyword.value = letter;
  store.dispatch("searchMealsByLetter", keyword.value);
}

onMounted(() => {
  if (keyword.value) {
    searchMeals(keyword.value);
  }
});
</script>

<style></style>

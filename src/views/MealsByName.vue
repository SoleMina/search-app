<template>
  <div class="flex flex-col p-8 justify-center">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for meals"
      @change="searchMeals"
    />
    <!-- [<div class="p-4">
      <p v-for="meal of results" :key="meal.idMeal">{{ meal.strMeal }}</p>
    </div>] -->
    <MealsComponent :meals="meals" :initial="initial" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealsComponent from "../components/MealsComponent";

const route = useRoute();
const keyword = ref("");
// const results = ref([]);
const meals = computed(() => store.state.searchedMeals);
let initial = false;

function searchMeals() {
  // const response = await axiosClient.get(`/search.php?s=${keyword.value}`);
  // results.value = response.data.meals;
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
    initial = true;
  } else {
    store.commit("setSearchedMeals", []);
  }
}
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>

<style></style>

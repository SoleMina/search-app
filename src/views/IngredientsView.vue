<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold pb-4">By Ingredients</h1>
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full mb-5"
      placeholder="Search for Ingredients"
    />
    <router-link
      v-for="ingredient of computedIngredient"
      :key="ingredient.idIngredient"
      class="block bg-white rounded p-3 mb-3 shadow"
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }"
    >
      <h3 class="text-xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
    <!-- <div>
      <div v-if="ingredients">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4 p-5">
          <MealItem :meals="ingredients" />
        </div>
      </div>
      <div v-else>
        <NoResults msg="Letra" />
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import axiosClient from "../axiosClient";
// import MealItem from "../components/MealItem.vue";
// import NoResults from "../components/NoResults.vue";

const keyword = ref("");
const ingredients = ref([]);

const computedIngredient = computed(() => {
  if (!computedIngredient.value) return ingredients.value;
  return ingredients.value.filter((i) => {
    return i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase());
  });
});

onMounted(() => {
  axiosClient.get(`/list.php?i=list`).then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>

<style></style>

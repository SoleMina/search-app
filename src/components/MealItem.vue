<template>
  <div
    v-for="meal of meals"
    :key="meal.idMeal"
    class="bg-white shadow rounded-xl"
  >
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        alt="meal.strMeal"
        class="rounded-t-xl h-72 object-cover w-full"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nulla
        dignissimos porro sequi consequuntur qui? Debitis facilis inventore
        velit earum veritatis, fuga ducimus quos, consequatur dolore praesentium
        accusantium.
      </p>
      <div class="flex items-center justify-between">
        <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
        <router-link
          to="/"
          class="px-3 py-2 rounded border-2 border-purple-600 bg-purple-500 hover:bg-purple-600 hover:text-white transition-colors text-white"
          >View</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "./YoutubeButton.vue";
import { defineProps } from "vue";

const props = defineProps({
  meals: Array,
});

console.log(props, "props");
</script>

<style></style>

<template>
  <div class="flex flex-col items-center p-8 justify-center">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for meals"
    />
    <!-- <div class="flex justify-center gap-2 mt-2">
      <router-link
        v-for="letter of letters"
        :key="letter"
        :to="{ name: 'byLetter', params: { letter } }"
      >
        {{ letter }}
      </router-link>
    </div> -->
    <!-- <div>
      <router-link
        v-for="name of ingredients.meals"
        :key="name.idIngredient"
        :to="{ name: 'byName', params: { name: name.strIngredient } }"
      >
        <p>{{ name.strIngredient }}</p>
      </router-link>
    </div> -->
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
// import store from "../store";
import axiosClient from "../axiosClient";

// const meals = computed(() => store.state.meals);
// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  console.log(response.data);
  ingredients.value = response.data;
  console.log(ingredients);
});
</script>

<style></style>

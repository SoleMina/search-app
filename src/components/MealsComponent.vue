<template>
  <div v-if="meals && meals.length > 0">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4 p-5">
      <MealItem :meals="meals" />
    </div>
  </div>
  <div v-else>
    <div v-if="initial">
      <NoResults msg="Ingrediente" />
    </div>
  </div>
</template>

<script setup>
import MealItem from "./MealItem.vue";
import NoResults from "./NoResults.vue";
import { defineProps, toRefs } from "vue";

const props = defineProps({
  meals: {
    required: true,
    type: Array,
  },
  msg: String,
  initial: Boolean,
});
const { meals } = toRefs(props);
</script>

<style></style>

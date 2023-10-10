import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByIngredient from "../views/MealsByIngredient.vue";
import MealDetails from "../views/MealDetails.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: MealsByIngredient,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "/meal/:id?",
        name: "mealDetails",
        component: MealDetails,
      },
    ],
  },
  {
    path: "/guest",
    component: GuestLayout,
    // children: [
    //   {
    //     path: "/by-name/:name?",
    //     name: "byName",
    //     component: MealsByName,
    //   },
    // ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

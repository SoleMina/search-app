import axiosClient from "../axiosClient";

export function searchMeals({ commit }, keyword) {
  return axiosClient.get(`/search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedMeals", data.meals);
  });
}
export function searchMealsByName({ commit }, name) {
  return axiosClient.get(`/search.php?s=${name}`).then(({ data }) => {
    commit("setMealsByName", data.meals);
  });
}
export function searchMealsByLetter({ commit }, letter) {
  return axiosClient.get(`/search.php?f=${letter}`).then(({ data }) => {
    commit("setMealsByLetter", data.meals);
  });
}
export function searchMealsByIngredient({ commit }, ingredient) {
  return axiosClient.get(`/filter.php?i=${ingredient}`).then(({ data }) => {
    commit("setMealsByIngredient", data.meals);
  });
}

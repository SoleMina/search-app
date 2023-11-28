<template>
  <div class="flex justify-center p-8">
    <p>No se encontraron productos con esa {{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "NoResults",
  props: {
    msg: String,
  },
};
</script>

<style></style>

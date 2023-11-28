<template>
  <div class="bg-gray-100 h-[100vh]">
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import NavBar from "./NavBar.vue";
</script>

<style></style>

<script setup lang="ts">
</script>

<template>
  <div class="h-full flex justify-center items-center relative bg-webp">
    <router-view />
  </div>
</template>

<style scoped>
.bg-webp {
  background-image: url('@/assets/images/fundo.webp');
  opacity: 0.8;
  background-size: cover;
  background-position: center;
  background-size: 60% auto;
}
</style>

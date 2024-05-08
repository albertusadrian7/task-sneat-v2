<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `ToDo - ${titleChunk}` : 'ToDo';
  }
});
</script>

<style scoped></style>

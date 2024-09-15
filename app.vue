<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `ToDo - ${titleChunk}` : 'ToDo';
  },
  script: [
    {
      src: '/sneat-1.0.0/assets/js/main.js',
      tagPosition: 'bodyClose'
    },
  ]
});
</script>

<style scoped></style>

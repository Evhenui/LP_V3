<template>
  <h3>Catalog {{ slug }}</h3>
</template>

<script setup>
const { slug } = useRoute().params;
</script>

<style scoped></style>

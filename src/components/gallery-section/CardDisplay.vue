<script setup lang="ts">
import Card from './Card.vue';
</script>

    <!-- class="flex gap-8 mt-2" -->
<template>
  <div
    class="grid [grid-template-columns:repeat(auto-fill,minmax(18rem,1fr))] lg:[grid-template-columns:repeat(auto-fill,minmax(24rem,1fr))] gap-10 mt-2"
  >
    <Card :render="true" />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</template>

<style></style>

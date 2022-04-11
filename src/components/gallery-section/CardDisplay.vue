<script setup lang="ts">
import Card from './Card.vue';

</script>

<template>
  <div class="grid [grid-template-columns:repeat(auto-fill,24rem)] gap-8 justify-items-centers mt-2">
    <Card :render="true"/>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</template>

<style>

</style>
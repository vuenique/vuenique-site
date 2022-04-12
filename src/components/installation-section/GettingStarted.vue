<script setup lang="ts">
import Installation from './startingItems/Installation.vue';
import Examples from './startingItems/Examples.vue';
import Documentation from './startingItems/Documentation.vue';
</script>

<template>
  <section class="py-8">
    <div class="container px-8 lg:px-0">
      <hr class="border-slate-500" />
      <h1
        class="py-8 text-4xl bg-gradient-to-r from-greenP to-whiteB text-transparent bg-clip-text"
      >
        Getting Started
      </h1>
      <div class="flex-col">
        <Installation />
        <Examples />
        <Documentation />
      </div>
    </div>
  </section>
</template>

<style></style>

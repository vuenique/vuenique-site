<script setup lang="ts">
import CardDisplay from './CardDisplay.vue';
</script>

<template>
  <section class="py-8">
    <div class="container px-8 lg:px-0">
      <hr class="w-full border-slate-500" />
      <div class="py-8">
        <h1
          class="text-4xl bg-gradient-to-r from-greenP to-whiteB text-transparent bg-clip-text"
        >
          Examples
        </h1>
        <p class="pt-4 text-whiteB">Click visualizations to see CodePen</p>
      </div>
      <CardDisplay />
    </div>
  </section>
</template>

<style></style>

<script setup lang="ts">
import MainDocumentation from './documentationSections/MainDocumentation.vue';
</script>

<template>
  <section class="py-8">
    <div class="container px-8 lg:px-0">
      <hr class="border-slate-500" />
      <h1
        class="py-8 text-4xl bg-gradient-to-r from-greenP to-whiteB text-transparent bg-clip-text"
      >
        Docs
      </h1>
      <div class="flex-col">
        <MainDocumentation />
      </div>
    </div>
  </section>
</template>

<style></style>

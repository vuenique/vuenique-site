<script setup lang="ts">
import FeatureItem1 from './FeatureItem1.vue';
import FeatureItem2 from './FeatureItem2.vue';
import FeatureItem3 from './FeatureItem3.vue';
</script>

<template>
  <section class="py-8">
    <div class="container px-8 lg:px-0">
      <hr class="border-slate-500" />
      <div class="py-8">
        <h1
          class="text-4xl bg-gradient-to-r from-greenP to-whiteB text-transparent bg-clip-text"
        >
          Features
        </h1>
      </div>
      <div
        class="grid [grid-template-columns:repeat(auto-fill,24rem)] gap-8 justify-items-centers mt-2"
      >
        <FeatureItem1 />
        <FeatureItem2 />
        <FeatureItem3 />
      </div>
    </div>
  </section>
</template>

<style></style>

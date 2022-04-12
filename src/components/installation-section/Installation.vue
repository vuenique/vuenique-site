<script setup lang="ts">
import InstallationItem1 from './InstallationItems/InstallationItem1.vue';
import InstallationItem2 from './InstallationItems/InstallationItem2.vue';
import InstallationItem3 from './InstallationItems/InstallationItem3.vue';
</script>

<template>
  <section class="py-8">
    <div class="container px-8 lg:px-0">
      <hr class="border-slate-500" />
      <h1
        class="py-8 text-4xl bg-gradient-to-r from-greenP to-whiteB text-transparent bg-clip-text"
      >
        Installation
      </h1>
      <div class="flex-col">
        <InstallationItem1 />
        <InstallationItem2 />
        <InstallationItem3 />
      </div>
    </div>
  </section>
</template>

<style></style>

<script setup lang="ts">
import Team from './components/team-section/Team.vue';
import Hero from './components/hero-section/Hero.vue';
import Gallery from './components/gallery-section/Gallery.vue';
import Features from './components/features-section/Features.vue';
import Navbar from './components/navbar/Navbar.vue';
import GettingStarted from './components/installation-section/GettingStarted.vue';
import FAQ from './components/faq-section/FAQ.vue';
import { onMounted, reactive } from 'vue';

let demoData;
onMounted(() => {
  console.log('In mount');
  fetch('/data')
    .then((res) => res.json())
    .then((data) => {
      console.log('Here in fetch', data)
      demoData = reactive(data);
    });
});
</script>

<template>
  <Navbar />
  <Hero />
  <Gallery />
  <Features />
  <GettingStarted />
  <!-- <FAQ /> -->
  <Team />
</template>

<style>
@import '@/assets/base.css';

/* mobile first */
@media (min-width: 1024px) {
  .navbar,
  .container {
    margin: 0 auto;
  }
}
</style>

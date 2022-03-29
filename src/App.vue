<script setup lang="ts">
import Team from "./components/team-section/Team.vue";
import Hero from "./components/hero-section/Hero.vue";
import Gallery from "./components/gallery-section/Gallery.vue";
import Features from "./components/features-section/Features.vue";
import Navbar from "./components/navbar/Navbar.vue";
import Installation from "./components/installation-section/Installation.vue";
import FAQ from "./components/faq-section/FAQ.vue";
</script>

<template>
  <Navbar />
  <Hero />
  <Gallery />
  <Installation />
  <Features />
  <Team />
  <FAQ />
</template>

<style>
@import "@/assets/base.css";

/* mobile first */
@media (min-width: 1024px){
  
  .navbar, .container {
    margin: 0 auto;
  }
}

</style>

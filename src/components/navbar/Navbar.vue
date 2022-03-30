<script setup lang="ts">
import { ref } from 'vue';

const showMobileMenu = ref(false);
</script>

<template>
  <nav class="fixed w-screen bg-gray-900 z-20">
    <div class="bg-gray-900 max-w-7xl mx-auto px-4">
      <div class="flex justify-between">
        <!-- menu -->
        <div class="flex space-x-4">
          <!-- logo -->
          <div class="flex items-center py-4 px-2">
            <img src="../../assets/testLogo.svg" class="w-14 h-14"/>
            <h1 class="bg-gradient-to-r from-emerald-400 to-green-700 text-transparent bg-clip-text font-bold text-2xl">Vuenique</h1>
          </div>
        </div>
        <!-- reactive menu desktop -->
        <div class="hidden md:flex items-center space-x-3">
          <!-- target blank for opening in new tab or window and rel for security concerns -->
          <a href="#" 
            target="_blank" rel="noopener noreferrer"
            title="Medium"
            class="text-zinc-300 hover:text-zinc-500">
            Medium
          </a>
          <a href="#"
            target="_blank" rel="noopener noreferrer"
            title="NPM"
            class="text-zinc-300 hover:text-zinc-500">
            NPM
          </a>
          <a href="https://github.com/oslabs-beta/Vuenique"
            target="_blank" rel="noopener noreferrer"
            title="Github"
            class="text-zinc-300 hover:text-zinc-500">
            Github
          </a>
          <a href="https://github.com/oslabs-beta/Vuenique/stargazers"
            target="_blank" rel="noopener noreferrer"
            title="Stars"
            class="text-zinc-300 hover:text-zinc-500">
            Stars
          </a>
        </div>
        <div class="md:hidden flex items-center"> 
          <button @click="showMobileMenu = !showMobileMenu" class="outline-none menu-button">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div v-show="showMobileMenu" class="mobile-menu bg-zinc-800">
      <a href="#" 
        target="_blank" rel="noopener noreferrer"
        class="block py-2 px-4 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-500">
        Medium
      </a>
      <a href="#"
        target="_blank" rel="noopener noreferrer"
        class="block py-2 px-4 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-500">
        NPM
      </a>
      <a href="https://github.com/oslabs-beta/Vuenique"
        target="_blank" rel="noopener noreferrer"
        class="block py-2 px-4 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-500">
        Github
      </a>
      <a href="https://github.com/oslabs-beta/Vuenique/stargazers"
        target="_blank" rel="noopener noreferrer"
        class="block py-2 px-4 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-500">
        Stars
      </a>
    </div>
  </nav>
</template>

<style>

</style>
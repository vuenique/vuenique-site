<script setup lang="ts">
import { ref } from 'vue';

const showMobileMenu = ref(false);
</script>

<template>
  <nav class="fixed w-screen bg-slate-800 z-20">
    <div class="smax-w-7xl mx-auto container px-8 md:px-0">
      <div class="flex justify-between">
        <!-- menu -->
        <div class="flex space-x-4">
          <!-- logo -->
          <div class="flex items-center py-4 px-2">
            <!-- <img src="../../assets/testLogo.svg" class="w-14 h-14"/> -->
            <h1
              class="bg-gradient-to-r from-greenP to-greenS text-transparent bg-clip-text tracking-[0.5rem] font-light text-2xl"
            >
              VUENIQUE
            </h1>
          </div>
        </div>
        <!-- reactive menu desktop -->
        <div class="hidden md:flex items-center space-x-3">
          <!-- target blank for opening in new tab or window and rel for security concerns -->
          <a
            href="#"
            target="https://medium.com/@alex.corlin6/vuenique-a9e6e2031e84"
            rel="noopener noreferrer"
            title="Medium"
            class="text-whiteT hover:text-slate-500"
          >
            Medium
          </a>
          <a
            href="https://www.npmjs.com/package/@vueniquejs/vuenique"
            target="_blank"
            rel="noopener noreferrer"
            title="NPM"
            class="text-whiteT hover:text-slate-500"
          >
            NPM
          </a>
          <a
            href="https://github.com/oslabs-beta/Vuenique"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
            class="text-whiteT hover:text-slate-500"
          >
            Github
          </a>
          <a
            href="https://github.com/oslabs-beta/Vuenique/stargazers"
            target="_blank"
            rel="noopener noreferrer"
            title="Stars"
            class="text-whiteT hover:text-slate-500"
          >
            Stars
          </a>
        </div>
        <div class="md:hidden flex items-center">
          <button
            @click="showMobileMenu = !showMobileMenu"
            class="outline-none menu-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-slate-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div v-show="showMobileMenu" class="mobile-menu bg-slate-900">
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        class="block py-2 px-4 hover:bg-slate-700 text-whiteB hover:text-slate-500"
      >
        Medium
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        class="block py-2 px-4 hover:bg-slate-700 text-whiteB hover:text-slate-500"
      >
        NPM
      </a>
      <a
        href="https://github.com/oslabs-beta/Vuenique"
        target="_blank"
        rel="noopener noreferrer"
        class="block py-2 px-4 hover:bg-slate-700 text-whiteB hover:text-slate-500"
      >
        Github
      </a>
      <a
        href="https://github.com/oslabs-beta/Vuenique/stargazers"
        target="_blank"
        rel="noopener noreferrer"
        class="block py-2 px-4 hover:bg-slate-700 text-whiteB hover:text-slate-500"
      >
        Stars
      </a>
    </div>
  </nav>
</template>

<style></style>

<script setup lang="ts"></script>

<template>
  <section class="pt-20">
    <div
      class="container mx-auto px-8 md:px-0 py-8 flex flex-col justify-between items-center lg:justify-betweeen lg:flex-row lg:py-20"
    >
      <div class="lg:pr-20 flex-col items-center pt-8 lg:pt-0 grow">
        <h1
          class="text-center lg:text-left text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-greenP to-blue-300 text-transparent bg-clip-text"
        >
          Low-Level Visualization Components For Vue
        </h1>
        <p
          class="text-center lg:text-left py-4 text-2xl text-whiteB font-thin leading-loose"
        >
          Inspired by visx, Vuenique brings the power of D3 to Vue, giving
          developers the ability to create highly customizable visualizations
          with primitive components
        </p>
        <a
          href="https://github.com/oslabs-beta/Vuenique"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
          class="text-whiteT hover:text-slate-500"
        >
          <button
            class="transition duration-500 mt-8 border-2 w-full lg:w-fit lg:px-4 py-2 rounded-full text-3xl text-blackT border-greenP bg-greenP hover:bg-green-500 hover:animate-pulse"
          >
            Learn more
          </button>
        </a>
      </div>
      <div
        class="round-md order-first lg:order-last xl:pl-24 2xl:pl-36 max-w-[75%] lg:max-w-[40%]"
      >
        <img src="../../assets/logo_gradient.svg" class="w-full" />
      </div>
    </div>
  </section>
</template>

<style></style>

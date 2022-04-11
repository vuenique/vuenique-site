<script setup lang="ts">
import { ref } from 'vue';

const isExample = ref(false);
const props = defineProps(['render']);
</script>

<template>
  <div
    class="bg-charcoalP w-[80vw] lg:w-96 h-fit px-4 py-4 gap-x-1 gap-y-1 rounded-xl shadow-blue-400 shadow-lg hover:shadow-2xl hover:shadow-blue-300 hover:scale-y-105 hover:scale-x-105 transition duration-500"
  >
    <!--card with slight coloration compared to gallery background; border radius -->
    <!--consider glare and hover tilt effect, or maybe for chart itself-->
    <!--graph/chart layout, padding, maybe border, no border radius -->
    <!-- -->
    <!-- -->
    <h1 v-if="props.render" class="text-center text-xl text-whiteB py-2">
      Bar Chart
    </h1>
    <h1 v-else class="text-center text-xl text-whiteB py-2">
      Chart of the Future
    </h1>
    <img
      v-if="props.render"
      src="../../assets/BarChart.png"
      class="w-full h-full rounded-xl"
      alt="Bar Chart"
    />
    <img
      v-else
      class="w-full h-full rounded-xl"
      src="../../assets/Sloth2.jpg"
      alt="Coming soon Sloth"
    />
  </div>
</template>

<style></style>

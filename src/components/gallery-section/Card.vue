<script setup lang="ts">
import { ref, onMounted, defineExpose } from 'vue';
import type { Ref } from 'vue';

const cardForWidth: any = ref(null);
const calculatedWidth: Ref<number> = ref(0);
const isExample = ref(false);
const props = defineProps(['render', 'title']);
const isRendered = ref(false);

onMounted(() => {
  // cardForWidth.value.focus();
  // calculatedWidth.value = cardForWidth.value.firstElementChild.offsetWidth;
  // console.log("calculatedWidth within Card", calculatedWidth.value);
  isRendered.value = true;
});
</script>

<template>
  <div
    class="bg-charcoalP px-4 py-4 rounded-xl shadow-blue-400 shadow-md hover:shadow-lg hover:shadow-blue-300 hover:scale-y-105 hover:scale-x-105 transition duration-500"
    ref="cardForWidth"
  >
    <!--card with slight coloration compared to gallery background; border radius -->
    <!--consider glare and hover tilt effect, or maybe for chart itself-->
    <!--graph/chart layout, padding, maybe border, no border radius -->
    <!-- -->
    <!-- -->
    <h1
      v-if="props.render"
      class="cardWidth text-center text-xl text-whiteB py-2"
    >
      {{ props.title }}
    </h1>
    <h1 v-else class="text-center text-xl text-whiteB py-2">
      Chart of the Future
    </h1>
    <slot v-if="props.render && isRendered"></slot>
    <img
      v-else
      class="w-full rounded-xl"
      src="../../assets/Sloth2.jpg"
      alt="Coming soon Sloth"
    />
  </div>
</template>

<style></style>

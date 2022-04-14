<script setup lang="ts">
import { LegendLinear, scaleLinear } from '@vueniquejs/vuenique';
import { ref, computed } from 'vue';

// import { defaultDomain } from '@vueniquejs/vuenique';
import type * as Vue from 'vue';

const clientWidth = ref(document.querySelector('.cardWidth')!.clientWidth);

window.addEventListener('resize', () => {
  clientWidth.value = document.querySelector('.cardWidth')!.clientWidth;
});

const linearScale = computed(() => {
  return scaleLinear({
    domain: [0, 10],
    range: ['#ed4fbb', '#e9a039'],
  });
});

const width = computed(() => {
  return `${clientWidth.value}px`;
});
const height = computed(() => {
  return `${clientWidth.value}px`;
});
const width2 = computed(() => {
  return `${clientWidth.value * 0.3}px`;
});
const height2 = computed(() => {
  return `${clientWidth.value * 0.5}px`;
});

const style = computed(() => {
  return {
    display: 'flex',
    backgroundColor: 'black',
    height: height.value,
    width: width.value,
    borderRadius: '14px',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'blue',
  };
});
const style2 = computed(() => {
  return {
    display: 'flex',
    // backgroundColor: 'black',
    height: height2.value,
    width: width2.value,
    borderRadius: '14px',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#8EE53F',
    border: '0.1rem solid',
    borderColor: '#FF6700',
  };
});
</script>

<template>
  <div id="div-legend" :style="style">
    <div class="legendContainer" :style="style2">
      <LegendLinear :scale="linearScale"></LegendLinear>
    </div>
  </div>
</template>

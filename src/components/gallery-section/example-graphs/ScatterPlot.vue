<script setup lang="ts">
import { Circle, scaleBand, scaleLinear } from '@vueniquejs/vuenique';
import { ref, computed, reactive } from 'vue';
import type { Ref } from 'vue';
import { extent, max } from 'd3-array';

type scatterPoint = {
  cx: number;
  cy: number;
};

type ScatterProps = {
  //height of entire plot
  height?: number;
  //width of entire plot
  width?: number;
  //circles to render
  circles: Record<string, unknown>[];
  //background color for plot
  background: string;
};

const scatterProps = defineProps<ScatterProps>();

const clientWidth = ref(document.querySelector('.cardWidth')!.clientWidth);

window.addEventListener('resize', () => {
  clientWidth.value = document.querySelector('.cardWidth')!.clientWidth;
});

const getcx = (p: scatterPoint) => p.cx;
const getcy = (p: scatterPoint) => p.cy;

const width = computed(() => {
  return clientWidth.value;
});
const height = computed(() => {
  return clientWidth.value;
});

const maxR = max(scatterProps.circles, (d: any) => d.r)!;
const xScale = computed(() => {
  return scaleLinear({
    domain: extent(scatterProps.circles, (d: any) => d.cx),
    range: [0 + maxR, width.value - maxR],
  });
});
const yScale = computed(() => {
  return scaleLinear({
    domain: extent(scatterProps.circles, (d: any) => d.cy),
    range: [0 + maxR, height.value - maxR],
  });
});
</script>

<template>
  <svg :width="width" :height="height">
    <rect
      :width="width"
      :height="height"
      :fill="scatterProps.background"
      rx="14"
    ></rect>
    <Circle
      v-for="(props, index) in scatterProps.circles"
      :key="index"
      v-bind="props"
      :cx="xScale(props.cx)"
      :cy="yScale(props.cy)"
      class="circle"
      fill="#B3DCFF"
    />
  </svg>
</template>

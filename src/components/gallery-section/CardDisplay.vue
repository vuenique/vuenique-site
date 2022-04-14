<template>
  <div
    class="grid [grid-template-columns:repeat(auto-fill,minmax(18rem,1fr))] lg:[grid-template-columns:repeat(auto-fill,minmax(24rem,1fr))] gap-10 mt-2"
  >
    <Card title="Bar Chart" :render="true">
      <BarGraph></BarGraph>
    </Card>
    <Card title="Line Graph" :render="true"><LineGraph></LineGraph></Card>
    <Card title="Scatter Plot" :render="true">
      <ScatterPlot :circles="points" background="#211B53"></ScatterPlot
    ></Card>
    <Card title="Legends" :render="true">
      <Legend></Legend>
    </Card>
    <Card />
    <Card />
  </div>
</template>

<script setup lang="ts">
import Card from './Card.vue';
import BarGraph from './example-graphs/BarGraph.vue';
import LineGraph from './example-graphs/LineGraph.vue';
import ScatterPlot from './example-graphs/ScatterPlot.vue';
import Legend from './example-graphs/Legend.vue';
import { ref, computed } from 'vue';

const points: Array<Record<string, unknown>> = [];
for (let i = 0; i < 50; i++) {
  points.push({ cx: Math.random() * 1000, cy: Math.random() * 1000, r: 4 });
}
</script>

<!-- class="flex gap-8 mt-2" -->
<!-- <template>
  <div
    class="grid [grid-template-columns:repeat(auto-fill,minmax(18rem,1fr))] lg:[grid-template-columns:repeat(auto-fill,minmax(24rem,1fr))] gap-10 mt-2"
  >
    <Card title="Bar Chart" :render="true">
      <BarGraph ref="calculatedComp" v-slot="slotProps" />
    </Card>
    <Card title="Line Graph" :render="true"></Card>
    <Card title="Scatter Plot" :render="true"></Card>
    <Card title="Legends" :render="true"></Card>
    <Card />
    <Card />
  </div>
</template> -->

<style></style>

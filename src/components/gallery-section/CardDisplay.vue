<template>
  <div
    class="grid [grid-template-columns:repeat(auto-fill,minmax(18rem,1fr))] lg:[grid-template-columns:repeat(auto-fill,minmax(24rem,1fr))] gap-10 mt-2"
  >
    <Card title="Bar Chart" :render="true">
      <BarGraph></BarGraph>
    </Card>
    <Card title="Line Graph" :render="true"></Card>
    <Card title="Scatter Plot" :render="true"></Card>
    <Card title="Legends" :render="true"></Card>
    <Card />
    <Card />
  </div>
</template>


<script setup lang="ts">
import Card from './Card.vue';
import BarGraph from './example-graphs/BarGraph.vue'
import {ref,computed} from 'vue';


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

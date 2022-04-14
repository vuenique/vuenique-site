<script setup lang="ts">
import { Circle, scaleBand, scaleLinear } from '@vueniquejs/vuenique';
import { ref, computed, reactive } from 'vue';
import type { Ref } from 'vue';

const points: Array<Record<string, unknown>> = [];
  for (let i = 0; i < 50; i++) {
  points.push({ cx: Math.random() * 1000, cy: Math.random() * 1000, r: 4 });
}
</script>
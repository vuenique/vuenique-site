<script setup lang="ts">
import Card from './Card.vue';
import { callWithErrorHandling, ref } from 'vue';

const teamInfo = ref([
  {
    id: 1,
    photo: 'AlexCprofile',
    name: 'Alex Corlin',
    github: 'https://github.com/acorlin6',
    linkedin: 'https://www.linkedin.com/in/alex-corlin-4b97a2235/',
  },
  {
    id: 2,
    photo: 'AlexHprofile',
    name: 'Alex Haile',
    github: 'https://github.com/ahaile923',
    linkedin: 'https://www.linkedin.com/in/alexander-haile-768580b3/',
  },
  {
    id: 3,
    photo: 'JamesMprofile',
    name: 'James Ma',
    github: 'https://github.com/jamesma1',
    linkedin: 'https://www.linkedin.com/in/james-ma-436668223/',
  },
  {
    id: 4,
    photo: 'MiaZprofile',
    name: 'Miaowen Zeng',
    github: 'https://github.com/MiaowZ',
    linkedin: 'https://www.linkedin.com/in/miaowen-zeng/',
  },
  {
    id: 5,
    photo: 'TrevorGprofile',
    name: 'Trevor Gray',
    github: 'https://github.com/tmg2549',
    linkedin: 'https://www.linkedin.com/in/trev-gray/',
  },
]);
</script>

<template>
  <section class="py-8">
    <div class="container mx-auto px-8 md:px-0">
      <hr class="w-full border-slate-500" />
      <h2
        class="py-8 text-center text-3xl lg:text-5xl text-greenP font-thin tracking-widest"
      >
        Contributors
      </h2>
      <div class="mt-8 flex justify-around flex-wrap gap-8">
        <Card v-for="person in teamInfo" v-bind="person" :key="person.id" />
      </div>
    </div>
  </section>
</template>

<style></style>

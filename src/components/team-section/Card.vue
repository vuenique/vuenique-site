<script setup lang="ts">
 const props = defineProps(["id", "photo", "name", "github", "linkedin"])

</script>

<template>
<!-- outer card container -->
  <div class="flex flex-col items-center space-y-2">
    <!-- circular image holder -->
    <div class="w-24 h-24 mt-10">
      <div class="p-1 rounded-full bg-gradient-to-r from-emerald-400 to-green-700 
          shadow-lg
          duration-500
          hover:scale-y-110 hover:scale-x-110
          hover:shadow-emerald-400
          ">
        <img src="../../assets/catUser.png" alt="Profile photo" class="rounded-full"/>
      </div>
    </div>
    <!-- bios maybe? -->
    <div class="text-white">
      {{ props.name }}
    </div>
    <!-- links -->
    <div class="flex space-x-3">
      <a :href="props.github" target="_blank" rel="noopener noreferrer" title="Github">
        <img src="../../assets/githubLogo.png" alt="Github" class="w-5 h-5"/>
      </a>
      <a :href="props.linkedin" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <img src="../../assets/linkedinLogo.svg" alt="LinkedIn"  class="w-5 h-5"/>
      </a>
    </div>
  </div>
</template>

<style>

</style>
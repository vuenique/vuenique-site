<script setup lang="ts">
import AlexCprofile from '../../assets/AlexCprofile.jpg';
import AlexHprofile from '../../assets/AlexHprofile.jpg';
import JamesMprofile from '../../assets/JamesMprofile.png';
import TrevorGprofile from '../../assets/TrevorGprofile.jpg';
import MiaZprofile from '../../assets/MiaZprofile.png';
const props = defineProps(['id', 'photo', 'name', 'github', 'linkedin']);
console.log(props.photo);

function getPhoto(photoName: string): string | undefined {
  switch (photoName) {
    case 'AlexCprofile':
      return AlexCprofile;
    case 'AlexHprofile':
      return AlexHprofile;
    case 'JamesMprofile':
      return JamesMprofile;
    case 'TrevorGprofile':
      return TrevorGprofile;
    case 'MiaZprofile':
      return MiaZprofile;
    default:
      console.error(`Invalid photo ${photoName}`);
      return undefined;
  }
}
</script>

<template>
  <!-- outer card container -->
  <div class="flex flex-col items-center space-y-2">
    <!-- circular image holder -->
    <div class="w-24 h-24 mt-10">
      <div
        class="p-1 rounded-full bg-gradient-to-r from-emerald-400 to-green-700 shadow-lg duration-500 hover:scale-y-110 hover:scale-x-110 hover:shadow-emerald-400"
      >
        <img
          :src="getPhoto(props.photo)"
          alt="Profile photo"
          class="rounded-full"
        />
      </div>
    </div>
    <!-- bios maybe? -->
    <div class="text-white">
      {{ props.name }}
    </div>
    <!-- links -->
    <div class="flex space-x-3">
      <a
        :href="props.github"
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
      >
        <img src="../../assets/githubLogo.png" alt="Github" class="w-5 h-5" />
      </a>
      <a
        :href="props.linkedin"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <img
          src="../../assets/linkedinLogo.svg"
          alt="LinkedIn"
          class="w-5 h-5"
        />
      </a>
    </div>
  </div>
</template>

<style></style>

<!--AlexH: https://ca.slack-edge.com/T02QNTJKVFB-U0301CQUQ1K-2260eb31149e-192-->

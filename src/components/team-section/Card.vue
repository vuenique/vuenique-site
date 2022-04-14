<script setup lang="ts">
import AlexCprofile from '../../assets/AlexCprofile.jpg';
import AlexHprofile from '../../assets/AlexHprofile.jpg';
import JamesMprofile from '../../assets/JamesMprofile.png';
import TrevorGprofile from '../../assets/TrevorGprofile.jpg';
import MiaZprofile from '../../assets/MiaZprofile.png';
const props = defineProps(['id', 'photo', 'name', 'github', 'linkedin']);

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
    <div class="w-52 h-52">
      <a
        :href="props.linkedin"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <div
          class="p-2 rounded-full bg-gradient-to-r from-emerald-400 to-green-700 shadow-lg duration-500 hover:scale-y-110 hover:scale-x-110 hover:shadow-emerald-400"
        >
          <img
            :src="getPhoto(props.photo)"
            alt="Profile photo"
            class="rounded-full mx-auto"
          />
        </div>
      </a>
    </div>
    <!-- bios maybe? -->
    <div class="text-white text-3xl font-light pt-2">
      {{ props.name }}
    </div>
    <!-- links -->
    <div class="flex gap-4 pt-2">
      <a
        :href="props.github"
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
      >
        <img src="../../assets/githubLogo.png" alt="Github" class="w-8 h-8" />
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
          class="w-8 h-8"
        />
      </a>
    </div>
  </div>
</template>

<style></style>

<!--AlexH: https://ca.slack-edge.com/T02QNTJKVFB-U0301CQUQ1K-2260eb31149e-192-->

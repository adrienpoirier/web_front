<script setup lang="ts">
import Serveurs from './Serveurs.vue'
</script>

<template>
  <!-- container des 3 partie -->
  <div class="flex flex-row h-full">
    <!-- partie serveur (gauche) -->
    <Serveurs />

    <!-- partie channel vocal / ecrit (millieux)-->
    <div class="bg-[#2f3136] w-60">

    </div>
    <!-- partie chat (droite) -->
    <div class="bg-[#36393f]">

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {

    return {

    };
  }
});
</script>
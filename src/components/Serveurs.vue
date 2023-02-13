<script setup lang="ts">
import Serveur from './Serveur.vue'
</script>

<template>
  <div class="w-[4.5rem] h-[100vh] bg-[#202225] flex items-center flex-col overflow-y-scroll no-scrollbar">
    <div class="w-full flex items-center flex-col">
      <!-- première bulle discord et spacer -->
      <div class="w-12 h-12 bg-[#2f3136] flex justify-center items-center rounded-3xl text-white duration-200 hover:rounded-xl hover:bg-[#454fbf] mt-2">
        <font-awesome-icon icon="fa-brands fa-discord" class="color-white" />
      </div>

      <div class="w-8 h-0.5 bg-[#2f3136] mt-2"></div>

      <!-- liste des serveur -->
      <Serveur v-for="serveur of serveurs" :key="serveur" :serveur="serveur" class="mt-2"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  data() {
    return {
      serveurs: ref([{name: "serveur1", dim: "s1"}, {name: "serveur2", dim: "s2"}, {name: "serveur3", dim: "s3"},{name: "serveur1", dim: "s1"}, {name: "serveur2", dim: "s2"}, {name: "serveur3", dim: "s3"},{name: "serveur1", dim: "s1"}, {name: "serveur2", dim: "s2"}, {name: "serveur3", dim: "s3"},{name: "serveur1", dim: "s1"}, {name: "serveur2", dim: "s2"}, {name: "serveur3", dim: "s3"},{name: "serveur1", dim: "s1"}, {name: "serveur2", dim: "s2"}, {name: "serveur3", dim: "s3"},{name: "serveur1", dim: "s1"}, {name: "serveur2", dim: "s2"}, {name: "serveur3", dim: "s3"},{name: "serveur1", dim: "s1"}, {name: "serveur2", dim: "s2"}, {name: "serveur3", dim: "s3"},{name: "serveur1", dim: "s1"}, {name: "serveur2", dim: "s2"}, {name: "serveur3", dim: "s3"},{name: "serveur1", dim: "s1"}, {name: "serveur2", dim: "s2"}, {name: "serveur3", dim: "s3"},{name: "serveur1", dim: "s1"}, {name: "serveur2", dim: "s2"}, {name: "serveur3", dim: "s3"}])
    }
  }
});
</script>


<style scoped>
  .no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
</style>
<template>
    <div :title="serveur.name" class="w-12 h-12 bg-[#2f3136] flex justify-center items-center rounded-3xl text-white duration-200 hover:rounded-xl hover:bg-[#454fbf]">
      <span class="text-[18px] text-white">{{serveur.dim}}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: ["serveur"]
});
</script>

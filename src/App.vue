<script setup lang="ts">
import Login from './components/Login.vue'
import Accueil from './components/Accueil.vue'
</script>

<template>
  <Login v-if="$route.name === 'login'" />
  <Accueil v-else-if="$route.name === 'accueil'"/>
</template>


<script lang="ts">
export default {
  
  
};
</script>
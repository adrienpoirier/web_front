<template>
  <div>
    <form @submit.prevent="login">
      <div>
        <label for="username">Nom d'utilisateur:</label>
        <input id="username" v-model="username" />
      </div>
      <div>
        <label for="password">Mot de passe:</label>
        <input id="password" v-model="password" type="password" />
      </div>
      <button type="submit">Connexion</button>
    </form>
  </div>
</template>
  
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import {Ref} from "@vue/reactivity";
  
  export default defineComponent({
    setup() {
      const username: Ref = ref('');
      const password: Ref = ref('');
  
      function login() {
        // Traitement de la soumission du formulaire de connexion
        console.log(`Username: ${username.value} Password: ${password.value}`);
      }
  
      return {
        username,
        password,
        login
      };
    }
  });
</script>
  
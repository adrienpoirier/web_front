<template>
    <div class="bg-gray-900 min-h-screen flex items-center justify-center">
      <div class="w-full max-w-sm">
        <form class="bg-white p-6 rounded-lg shadow-xl">
          <h2 class="text-lg font-medium mb-4 text-gray-900">Connexion</h2>
          <div class="mb-4">
            <label class="block font-medium mb-2 text-gray-700" for="username">
              Pseudo
            </label>
            <input
              class="w-full border border-gray-400 p-2 rounded-lg"
              id="username"
              type="username"
              v-model="username"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block font-medium mb-2 text-gray-700" for="password">
              Mot de passe
            </label>
            <input
              class="w-full border border-gray-400 p-2 rounded-lg"
              id="password"
              type="password"
              v-model="password"
              required
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-indigo-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-600"
              @click="submit"
            >
              Connexion
            </button>
            <a
              class="font-medium text-indigo-500 hover:text-indigo-600"
              href="#"
            >
              Mot de passe oublié ?
            </a>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        password: ""
      };
    },
    methods: {
      submit() {
        // Traitement de la soumission du formulaire ici
        console.log(this.email, this.password);
      }
    }
  };
  </script>
  
  
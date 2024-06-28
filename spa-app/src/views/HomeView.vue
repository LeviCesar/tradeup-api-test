<template>
  <div class="h-2/4 w-3/6 p-4 border border-white rounded-2xl flex flex-col justify-around items-center bg-white">
    <h1 class="text-2xl font-medium mb-2">
      Bem-vindo ao nosso Sistema de Consulta de CEP Residencial,
    </h1>
    <p class="font-medium mb-2">
      uma ferramenta poderosa e eficiente desenvolvida para simplificar e
      agilizar o acesso a informações detalhadas sobre endereços residenciais.
      Com apenas um CEP, você pode obter dados completos e precisos sobre
      qualquer endereço no Brasil, facilitando processos logísticos, cadastros
      de clientes, e diversas outras aplicações comerciais e pessoais.
    </p>

    <button class="border rounded-2xl p-2 bg-green-600 text-white">
      <router-link :to="{ name: 'cep' }">Nova Consulta</router-link>
    </button>
  </div>
</template>

<script setup lang="ts"></script>

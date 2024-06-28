<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed, ref } from "vue";
import InputMask from "@/components/InputMask.vue";
import { useStore } from "../store";
import { GET_CEP_INFOS } from "../store/actions";

const search = ref("");
const store = useStore();
const cepInfos = computed(() => store.state.cepInfos);
const message = computed(() => store.state.message);

const searchCep = () => {
  store.dispatch(GET_CEP_INFOS, search.value);
};
</script>

<template>
  <div
    class="h-2/4 w-3/6 p-4 border border-white rounded-2xl flex flex-col items-center bg-white"
  >
    <div class="w-full flex flex-col justify-center items-center space-y-4 mb-3">
      <router-link :to="{ name: 'home' }" class="self-start">
        <font-awesome-icon :icon="['fas', 'circle-arrow-left']" size="2x" />
      </router-link>

      <form
        @submit.prevent="searchCep"
        class="bg-white border border-indigo-600/30 rounded-lg flex items-center mb-4"
      >
        <InputMask
          type="text"
          class="rounded-lg p-2 border-0 outline-0 focus:ring-2 focus:ring-indigo-600 ring-inset w-full"
          mask="#####-###"
          :masked="true"
          :value="search"
          :required="true"
          @input="(value: string) => search = value"
          placeholder="00000-000"
        />
        <button class="p-2">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </button>
      </form>
    </div>

    <div class="h-full">
      <div class="grid grid-cols-2" v-if="Object.keys(cepInfos).length">
        <div>
          <h1 class="font-bold">Formatado</h1>
          <p>CEP = {{ cepInfos.postalCode }}</p>
          <p>Logradouro = {{ cepInfos.publicPlace }}</p>
          <p>Complemento = {{ cepInfos.complement }}</p>
          <p>Unidade = {{ cepInfos.unity }}</p>
          <p>Bairro = {{ cepInfos.neighborhood }}</p>
          <p>Cidade = {{ cepInfos.city }}</p>
          <p>UF = {{ cepInfos.uf }}</p>
          <p>Código IBGE = {{ cepInfos.ibge }}</p>
          <p>GIA = {{ cepInfos.gia }}</p>
          <p>DDD = {{ cepInfos.ddd }}</p>
          <p>SIAFI = {{ cepInfos.siafi }}</p>
        </div>
        <div>
          <h1 class="font-bold">Literal</h1>
          <pre>{{ JSON.stringify(cepInfos, undefined, 2) }}</pre>
        </div>
      </div>
      <p v-else>{{ message }}</p>
    </div>
  </div>
</template>

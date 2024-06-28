import { InjectionKey } from "vue";
import { Store, createStore, useStore as vuexUseStore } from "vuex";

import Cep from "@/interfaces/cep";
import http from "@/http";

import { GET_CEP_INFOS } from "./actions";
import { SET_CEP_INFOS, SET_MESSAGE } from "./mutations";

interface CepResponse {
  message: string;
  cepInfos: Cep;
}

export const key: InjectionKey<Store<CepResponse>> = Symbol();

export const store = createStore<CepResponse>({
  state: {
    message: "Nenhum dado encontrado!",
    cepInfos: {},
  },
  mutations: {
    [SET_MESSAGE](state, message: string) {
      state.message = message;
    },
    [SET_CEP_INFOS](state, cepInfos: Cep) {
      state.cepInfos = cepInfos;
    },
  },
  actions: {
    [GET_CEP_INFOS]({ commit }, cep: object) {
        console.log(cep)
      http
        .get(`/address/get/${cep}`)
        .then((response) => {
            return response.data
        })
        .then((data) => {
            commit(SET_CEP_INFOS, data.data)
            commit(SET_MESSAGE, data.message)
        })
        .catch((error) => {
            console.log(error)
            commit(SET_CEP_INFOS, {})
            commit(SET_MESSAGE, error.detail)
        })
    },
  },
});

export function useStore(): Store<CepResponse> {
    return vuexUseStore(key)
}
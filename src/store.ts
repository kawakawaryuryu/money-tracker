import Vue from 'vue';
import Vuex from 'vuex';
import { CLOSE_INPUT_DIALOG, OPEN_INPUT_DIALOG } from '@/mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inputDialog: false
  },
  mutations: {
    [OPEN_INPUT_DIALOG](state) {
      state.inputDialog = true;
    },
    [CLOSE_INPUT_DIALOG](state) {
      state.inputDialog = false;
    }
  },
  actions: {}
});

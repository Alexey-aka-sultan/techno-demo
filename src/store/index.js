import Vue from "vue";
import Vuex from "vuex";

import users from './users'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    itemNames: [
      "volleyball-ball",
      "baseball-ball",
      "drum",
      "futbol",
      "bowling-ball",
      "bicycle",
      "pepper-hot",
      "carrot",
      "lemon",
      "bomb"
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getItemNames(state) {
      return state.itemNames;
    }
  },
  modules: {
    users
  }
});

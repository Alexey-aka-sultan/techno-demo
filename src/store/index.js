import Vue from "vue";
import Vuex from "vuex";

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
  mosules: {}
});

export default {
  state: {
    allUsers: [],
    moreInfoUserID: -1
  },
  mutations: {
    setAllUsers(state, payload) {
      state.allUsers = payload;
    },
    setMoreInfoUserID(state, payload) {
      state.moreInfoUserID = payload;
    }
  },
  actions: {
    async getUsers({ commit }) {
      try {
        const response = await axios.get("users");
        commit("setAllUsers", response.data);
      } catch (error) {
        throw error.response;
      }
    },
    getUserByID(context, payload) {
      return context.getters.allUsers[payload];
    }
  },
  getters: {
    allUsers(state) {
      return state.allUsers;
    },
    moreInfoUserID(state) {
      return state.moreInfoUserID;
    }
  }
};

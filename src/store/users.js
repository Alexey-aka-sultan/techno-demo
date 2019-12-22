export default {
  state: {
    allUsers: [],
    selectedUser: null
  },
  mutations: {
    setAllUsers(state, payload) {
      state.allUsers = payload;
    },
    setSelectedUser(state, id) {
      state.selectedUser = state.allUsers.find(item => {
        return item.id === id;
      });
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
    }
  },
  getters: {
    allUsers(state) {
      return state.allUsers;
    },
    selectedUser(state) {
      return state.selectedUser;
    }
  }
};

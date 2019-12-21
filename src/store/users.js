export default {
  state: {},
  mutations: {},
  actions: {
    async getUsers({ commit }) {
      try {
        const response = await axios.get("users");        
        return response.data;
      } catch (error) {
        throw error.response;
      }
    }
  },
  getters: {}
};

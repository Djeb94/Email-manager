import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: null,
    isAuthenticated: false
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.isAuthenticated = true; 
    },
    clearUser(state) {
      state.user = null;
      state.isAuthenticated = false; 
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated; 
    }
  }
});

export default store;

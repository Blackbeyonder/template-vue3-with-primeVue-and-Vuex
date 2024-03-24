// store/modules/user.js
const state = {
    user: null
  };
  
  const mutations = {
    setUser(state:any, user:any) {
      state.user = user;
    }
  };
  
  const actions = {
    loginUser({ commit }:any, user:any) {
      // Lógica para iniciar sesión y obtener datos de usuario
      commit('setUser', user);
    }
  };
  
  const getters = {
    currentUser: (state:any) => state.user
  };
  
  export default {
    state,
    mutations,
    actions,
    getters
  };
  
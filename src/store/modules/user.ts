const userModule = {
    namespaced: true, //! important
    state: {
      user: null
    },
    mutations: {
      // Mutación para establecer el usuario
      setUser(state:any, user:any) {
        state.user = user;
      },
      // Mutación para limpiar el usuario (cerrar sesión)
      clearUser(state:any) {
        state.user = null;
      }
    },
    actions: {
      // Acción para iniciar sesión
      async login({ commit }:any, infoUser:any) {
        try {
          commit('setUser', infoUser);
        } catch (error) {
          console.error('Error en el inicio de sesión:', error);
          throw error; // Opcional: lanza el error para que el componente pueda manejarlo
        }
      },
      // Acción para cerrar sesión
      async logout({ commit }:any) {
        try {
          // Aquí realizarías la lógica para cerrar sesión, como limpiar tokens de sesión, etc.
          // Llama a la mutación clearUser para limpiar el usuario del estado
          commit('clearUser');
        } catch (error) {
          console.error('Error al cerrar sesión:', error);
          throw error; // Opcional: lanza el error para que el componente pueda manejarlo
        }
      }
    },
    getters: {
      // Getter para obtener el usuario actual
      currentUser: (state:any) => state.user
    }
  };
  
  export default userModule;
  
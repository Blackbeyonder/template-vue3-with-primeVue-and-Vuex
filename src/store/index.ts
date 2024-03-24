import { createStore, Store } from 'vuex';

// Define el tipo de estado para el usuario
interface UserState {
  user: User | null;
}

// Define el tipo para el objeto de usuario
interface User {
  username: string;
  email: string;
  // Otros campos según sea necesario
}

// Inicializa el estado del usuario
const initialState: UserState = {
  user: null
};

export default createStore<UserState>({
  state: initialState,
  mutations: {
    // Mutación para establecer el usuario
    setUser(state, user: User) {
      state.user = user;
    },
    // Mutación para limpiar el usuario (cerrar sesión)
    clearUser(state) {
      state.user = null;
    }
  },
  actions: {
    // Acción para iniciar sesión
    async login({ commit }, infoUser) {
      try {
        
        commit('setUser', infoUser);
      } catch (error) {
        // Manejo de errores
        console.error('Error en el inicio de sesión:', error);
        throw error; // Opcional: lanza el error para que el componente pueda manejarlo
      }
    },
    // Acción para cerrar sesión
    async logout({ commit }) {
      try {
        // Aquí realizarías la lógica para cerrar sesión, como limpiar tokens de sesión, etc.
        // Llama a la mutación clearUser para limpiar el usuario del estado
        commit('clearUser');
      } catch (error) {
        // Manejo de errores
        console.error('Error al cerrar sesión:', error);
        throw error; // Opcional: lanza el error para que el componente pueda manejarlo
      }
    }
  },
  getters: {
    // Getter para obtener el usuario actual
    currentUser: state => state.user
  }
});

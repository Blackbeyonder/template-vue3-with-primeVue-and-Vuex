// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa las rutas de Vue Router
import PrimeModules from './prime-modules';
import store from './store/index'; // Importa tu store Vuex

createApp(App).use(router).use(PrimeModules).use(store).mount('#app');

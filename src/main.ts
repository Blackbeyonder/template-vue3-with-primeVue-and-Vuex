// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa las rutas de Vue Router
import PrimeModules from './prime-modules';


createApp(App).use(router).use(PrimeModules).mount('#app');

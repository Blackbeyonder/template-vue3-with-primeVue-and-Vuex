// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa las rutas de Vue Router
import PrimeVue from 'primevue/config';

//theme
import 'primevue/resources/themes/aura-light-green/theme.css'

//icons
import 'primeicons/primeicons.css';


createApp(App).use(router).use(PrimeVue).mount('#app');

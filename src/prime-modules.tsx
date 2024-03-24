import { App } from 'vue';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
// Importa otros módulos de PrimeVue según sea necesario

//theme
import 'primevue/resources/themes/aura-light-green/theme.css'

//icons
import 'primeicons/primeicons.css';

export default {
  install(app:App) {
    app.use(PrimeVue);
    app.component('Button', Button);
    app.component('InputText', InputText);
    // Registra otros componentes de PrimeVue según sea necesario
  }
};

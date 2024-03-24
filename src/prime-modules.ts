import { App } from 'vue';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
// Import component's prime that you need

//theme
import 'primevue/resources/themes/aura-light-green/theme.css'

//icons
import 'primeicons/primeicons.css';

// eslint-disable-line-vue/multi-word-component-names to ignore 'eslint'.
export default {
  install(app:App) {
    app.use(PrimeVue);
    app.component('Button', Button); // eslint-disable-line vue/multi-word-component-names
    app.component('InputText', InputText);
    // Registra otros componentes de PrimeVue según sea necesario
  }
};

import { Options, Vue } from "vue-class-component";
// Importa el componente Button de PrimeVue
import Button from 'primevue/button';

@Options({
    components: {
      Button
    }
})

export default class home extends Vue {
//   msg!: string;

    handleClick() {
      // Método para manejar el evento de clic en el botón
      console.log('Button clicked!');
    }
  

}
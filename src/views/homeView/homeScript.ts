import { Options, Vue } from "vue-class-component";
import headerComponent from "../../components/headerComponent/headerTemplate.vue";
import footerComponent from "../../components/footerComponent/footerTemplate.vue";
import homeService from "@/services/homeService";
import { Store } from 'vuex'; // Importa Store de Vuex

@Options({
  components: {
    headerComponent,
    footerComponent
  }
})
export default class homeComponent extends Vue {

  username= "";
  password = "";
  $store!: Store<any>; // Declara la propiedad $store como un Store de Vuex
  

  async mounted() {
    try {
      const data = await homeService.fetchData();
      console.log('Data from API:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
//   msg!: string;

    handleClick() {
      // Método para manejar el evento de clic en el botón
      console.log('Button clicked!');
    }

    async login() {
      try {
        // Llama a la acción loginUser del módulo user
        await this.$store.dispatch('user/loginUser', { username: this.username, password: this.password });
        // Acción realizada con éxito
        console.log('Login successful');
      } catch (error) {
        // Manejo de errores
        console.error('Login error:', error);
      }
    }

    
  

}
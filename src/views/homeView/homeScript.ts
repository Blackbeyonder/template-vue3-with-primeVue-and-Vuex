import { Options, Vue } from "vue-class-component";
import headerComponent from "../../components/headerComponent/headerTemplate.vue";
import footerComponent from "../../components/footerComponent/footerTemplate.vue";
import homeService from "@/services/homeService";
import { useStore  } from 'vuex'; // Importa Store de Vuex

@Options({
  components: {
    headerComponent,
    footerComponent
  }
})
export default class homeComponent extends Vue {

  username= "";
  password = "";
  objInStore={};
  private store = useStore();
  

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
      this.store.dispatch('user/login', { username: this.username, password: this.password });

      const currentUser = this.store.getters['user/currentUser'];
      this.objInStore = currentUser? currentUser : {};
    }

    
  

}
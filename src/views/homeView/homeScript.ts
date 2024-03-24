import { Options, Vue } from "vue-class-component";
import headerComponent from "../../components/headerComponent/headerTemplate.vue";
import footerComponent from "../../components/footerComponent/footerTemplate.vue";
import homeService from "@/services/homeService";

@Options({
  components: {
    headerComponent,
    footerComponent
  }
})
export default class homeComponent extends Vue {

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

    
  

}
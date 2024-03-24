import { Options, Vue } from "vue-class-component";
import headerComponent from "../../components/headerComponent/headerTemplate.vue";
import footerComponent from "../../components/footerComponent/footerTemplate.vue";

@Options({
  components: {
    headerComponent,
    footerComponent
  }
})
export default class homeComponent extends Vue {
//   msg!: string;

    handleClick() {
      // Método para manejar el evento de clic en el botón
      console.log('Button clicked!');
    }
  

}
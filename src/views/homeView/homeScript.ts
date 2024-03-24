import { Options, Vue } from "vue-class-component";
import headerComponent from "../../components/headerComponent/headerTemplate.vue";

@Options({
  components: {
    headerComponent
  }
})
export default class homeComponent extends Vue {
//   msg!: string;

    handleClick() {
      // Método para manejar el evento de clic en el botón
      console.log('Button clicked!');
    }
  

}
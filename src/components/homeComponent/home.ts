import { Options, Vue } from "vue-class-component";

@Options({
})
export default class home extends Vue {
//   msg!: string;

    handleClick() {
      // Método para manejar el evento de clic en el botón
      console.log('Button clicked!');
    }
  

}
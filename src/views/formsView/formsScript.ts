import { Options, Vue } from "vue-class-component";
import headerComponent from "../../components/headerComponent/headerTemplate.vue";
import footerComponent from "../../components/footerComponent/footerTemplate.vue";
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { reactive } from "vue";

@Options({
    components: {
        headerComponent,
        footerComponent
    }
})
export default class formsComponent extends Vue {
    state = reactive({
        firstName: '',
        lastName: '',
    })
    rules = {
        firstName: { required }, // Matches state.firstName
        lastName: { required }, // Matches state.lastName
    }


    v$:any= useVuelidate(this.rules, this.state);
  
    


    async submitForm() {
        const valid =  await this.v$.$validate();
        console.log(this.v$.firstName.$error);
        

        if (valid) {
            console.log("Formulario válido");
        } else {
            console.log("Formulario inválido");
        }
    }


}
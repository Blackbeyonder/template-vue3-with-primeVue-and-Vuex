import { Options, Vue } from "vue-class-component";
import headerComponent from "../../components/headerComponent/headerTemplate.vue";
import footerComponent from "../../components/footerComponent/footerTemplate.vue";

@Options({
  components: {
    headerComponent,
    footerComponent
  }
})
export default class formsComponent extends Vue {

  username= "";
  password = "";
  objInStore={};
  
    
  

}
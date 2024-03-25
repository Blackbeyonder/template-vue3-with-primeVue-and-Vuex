import { Options, Vue } from "vue-class-component";
import headerComponent from "../../components/headerComponent/headerTemplate.vue";
import footerComponent from "../../components/footerComponent/footerTemplate.vue";
import homeService from "@/services/homeService";
import { useStore  } from 'vuex'; //! importante to use Store

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

    handleClick() {
      // method to handler click
      console.log('Button clicked!');
      
    }

    async login() {
      //Call action in module {module}/{action}
      this.store.dispatch('user/login', { username: this.username, password: this.password });

      //To access in getters
      const currentUser = this.store.getters['user/currentUser'];
      this.objInStore = currentUser? currentUser : {};
    }

    
  

}
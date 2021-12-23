<template>
  <v-container>
    <Navi @setMainFlag="setMainFlag"/>
    
    <Homepage v-if="mainFlag==0"/>
    <NewItem v-if="mainFlag==1"/>
    <BestItem v-if="mainFlag==2"/>
  </v-container>
</template>

<script>
import Navi from "./Navi.vue";
import Homepage from "./Homepage";
import NewItem from "./NewItem";
import BestItem from "./BestItem";
import main from '@/router/main';

export default {
  name: "mainPage",
  components: {
    Navi,
    Homepage,
    NewItem,
    BestItem
  },
  data:()=> ({
    mainFlag:0
  }),
  methods: {
    setMainFlag(flag){
      this.mainFlag=flag;
    }
  },
  created(){
  },
  computed: {
    mainFlag: function () {
      return this.$store.state.mainFlag;
    }
  },
  watch:{
    mainFlag (to, from) {
      // Our fancy notification (2).
      console.log(`${to}`)
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
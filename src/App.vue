<template>
  <v-app>
    <app-header/>
    
    <v-main class="pt-12">
      <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="800px"
      >
        <router-view/>
      </v-sheet>
    </v-main>
    
    <app-footer/>
  </v-app>
</template>

<script>
import AppFooter from './components/layout/AppFooter.vue';
import AppHeader from './components/layout/AppHeader.vue';
import  axios  from 'axios'
export default {
  components: { 
    AppHeader,
    AppFooter 
  },
  name: 'App',
  data: () => ({
  }),
  beforeCreate(){
    axios.get(`http://localhost:8081/category`)
      .then(response => {
        console.log(response);
        console.log(response.data);
        this.$store.commit("category/setCategory",response.data);
                      //document.querySelector("#content").innerHTML = response.data;
                      //$("#content").html(response.data);
        console.log(this.$store.getters["category/getCategory"])
      })
      .catch(response =>{
        console.log(response);
      })
    axios.get(`http://localhost:8081/category/brand`)
      .then(response => {
        console.log(response);
        console.log(response.data);
        this.$store.commit("category/setBrandCategory",response.data);
                      //document.querySelector("#content").innerHTML = response.data;
                      //$("#content").html(response.data);
        console.log(this.$store.getters["category/getBrandCategory"])
      })
      .catch(response =>{
        console.log(response);
      })
    
  }
};
</script>

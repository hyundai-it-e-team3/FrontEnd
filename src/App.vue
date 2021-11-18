<template>
  <v-app>
<v-app-bar
      color="black"
      dense
      dark
    >

      <v-toolbar-title >HANDSOME</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
    <v-footer
      color="black lighten-1"
      padless
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
        <v-col
          class=" lighten-2 py-4 text-center white--text"
          cols="12"
        > 
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import AppHeader from './components/layout/AppHeader.vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  computed: { headerFlag() { return this.$store.state.headerFlag; } }
};
</script>

<template>
  <v-app>
<v-app-bar v-if="headerFlag"
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
      >ss
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

export default {
  name: 'App',

  data: () => ({
    //
    flag:true
  }),
  computed: { headerFlag() { return this.$store.state.headerFlag; } }

};
</script>

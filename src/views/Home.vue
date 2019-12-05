<template>
  <v-app>
    <div class="home">
      <div>
        <v-app-bar id="header" color="green" dark prominent>
          <v-spacer></v-spacer>

          <v-toolbar-title id="titel">Illustreret Videnskab</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-menu left bottom>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                <v-list-item-title>Option {{ n }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-app-bar>
      </div>

      <section id="top-section"></section>
      <!-- Adnan -->
      <section id="middle-section"></section>
      <!-- Tobias -->
      <section id="bottom-section"></section>
      <!-- Alex -->
    </div>
  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home"
};
</script>

<style lang="scss">
</style>
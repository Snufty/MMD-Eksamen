<template>
  <v-app>
    <div class="home">
      <div>
        <v-app-bar color="deep-purple accent-4" height="120">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-spacer></v-spacer>

          <v-img
            src="https://cdn.discordapp.com/attachments/649954932815822880/651725077964128276/logo_da_ill.png"
            height="100"
            contain
          ></v-img>

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

      <v-container id="sec_container" fluid no gutters>
        <v-row no gutters>
          <div id="sec_1"></div>
        </v-row>
        <v-row no gutters>
          <div id="sec_2"></div>
        </v-row>
        <v-row no gutters>
          <div id="sec_3"></div>
        </v-row>
      </v-container>
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
#sec_container {
  padding: 0;
}

#sec_1 {
  height: 100vh;
  width: 100vw;
  background-color: red;
  background-image: url("https://svgshare.com/i/GdL.svg");
  background-size: cover;
}

#sec_2 {
  height: 100vh;
  width: 100vw;
  background-color: blue;
}

#sec_3 {
  height: 100vh;
  width: 100vw;
  background-color: green;
  background-image: url("https://svgshare.com/i/Gde.svg");
  background-size: cover;
}
</style>
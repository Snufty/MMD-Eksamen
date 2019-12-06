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
          <div id="sec_1">
            <div class="text-center">
              <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on }">
                  <v-btn color="red lighten-2" dark v-on="on">Click Me</v-btn>
                </template>

                <v-card>
                  <v-card-title class="headline grey lighten-2" primary-title>Privacy Policy</v-card-title>

                  <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false">I accept</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </div>
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
}
</style>
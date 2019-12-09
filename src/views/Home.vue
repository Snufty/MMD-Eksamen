<template>
  <v-app>
    <div class="home">
      <v-container id="sec_container" fluid no gutters>
        <v-row id="header" height="100">
          <v-col id="left" cols="12" sm="1"></v-col>
          <v-col id="center" cols="12" sm="10">
            <v-img src="https://svgshare.com/i/Gdt.svg" height="250" contain></v-img>
          </v-col>
          <v-col id="right" cols="12" sm="1"></v-col>
        </v-row>

        <v-row no gutters>
          <div id="sec_1">
            <v-dialog v-model="dialog1" max-width="300" scrollable content-class="dialog1">
              <template v-slot:activator="{ on }">
                <v-btn icon depressed v-on="on" color="transparent">
                  <v-avatar height="120" width="120" tile>
                    <img src="https://image.flaticon.com/icons/svg/1684/1684370.svg" />
                  </v-avatar>
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>Asteroid</v-card-title>
                <v-card-text>
                  What we see here is a very beautiful Asteroid
                  Once a upon a time this
                </v-card-text>
                <v-divider></v-divider>
                <v-img
                  id="card-img"
                  contain
                  src="https://image.flaticon.com/icons/svg/1684/1684370.svg"
                  height="170"
                  width="120"
                ></v-img>
                <v-spacer></v-spacer>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="dialog1 = false">close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </v-row>

        <v-row no gutters>
          <div id="sec_2">
            <v-dialog v-model="dialog2" max-width="300" scrollable content-class="dialog2">
              <template v-slot:activator="{ on }">
                <v-btn icon depressed v-on="on" color="transparent">
                  <v-avatar height="120" width="120" tile>
                    <img src="https://image.flaticon.com/icons/svg/1684/1684370.svg" />
                  </v-avatar>
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>Asteroid</v-card-title>
                <v-card-text>
                  What we see here is a very beautiful Asteroid
                  Once a upon a time this little thing went like pawww skrrr
                </v-card-text>
                <v-divider></v-divider>
                <v-img
                  id="card-img"
                  contain
                  src="https://image.flaticon.com/icons/svg/1684/1684370.svg"
                  height="170"
                  width="120"
                ></v-img>
                <v-spacer></v-spacer>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="dialog2 = false">close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </v-row>

        <v-row no gutters>
          <div id="sec_3"></div>
        </v-row>

        <v-row no gutters>
          <div id="sec_4"></div>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      dialog1: false,
      dialog2: false
    };
  }
};
</script>

<style lang="scss">
#sec_container {
  padding: 0;
  margin: 0;
  background-image: url("https://svgshare.com/i/GdQ.svg");
  background-size: cover;
}

#sec_1 {
  height: 100vh;
  width: 100vw;
}

#sec_2 {
  height: 100vh;
  width: 100vw;
}

#sec_3 {
  height: 100vh;
  width: 100vw;
}

#sec_4 {
  height: 100vh;
  width: 100vw;
}

#card-img {
  position: relative;
  left: 30%;
}

.dialog1 {
  position: relative;
  right: 35%;
  bottom: 7%;
}
</style>
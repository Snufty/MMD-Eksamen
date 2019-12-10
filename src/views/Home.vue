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
            <v-img src="https://svgshare.com/i/Ggy.svg" height="250" width="250" id="debris_1"></v-img>
            <v-dialog
              v-model="dialog2"
              max-width="300"
              scrollable
              content-class="dialog2"
              hide-overlay="true"
            >
              <template v-slot:activator="{ on }">
                <v-btn icon depressed v-on="on" color="transparent" id="satelite">
                  <v-img src="https://svgshare.com/i/GeR.svg" height="550" width="550"></v-img>
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
                  src="https://media.giphy.com/media/fYexKcRTSFumjejKPe/giphy.gif"
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
          <div id="sec_2">
            <v-dialog
              v-model="dialog1"
              max-width="300"
              scrollable
              content-class="dialog1"
              hide-overlay="true"
            >
              <template v-slot:activator="{ on }">
                <v-btn icon depressed v-on="on" color="transparent">
                  <v-img
                    src="https://svgshare.com/i/GhY.svg"
                    height="600"
                    width="600"
                    id="satelite2"
                  ></v-img>
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
          <div id="sec_3"></div>
        </v-row>

        <v-row no gutters>
          <div id="sec_4"></div>
        </v-row>
      </v-container>
      <v-footer color="deep-purple darken-1" padless>
        <v-row justify="center" no-gutters>
          <v-btn
            v-btn
            :to="{name: 'referencer'}"
            v-for="link in links"
            :key="link"
            color="white"
            text
            rounded
            class="my-2"
          >{{ link }}</v-btn>
        </v-row>
      </v-footer>
    </div>
  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      dialog1: false,
      dialog2: false,

      links: ["referencer"]
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

#satelite {
  position: relative;
  left: 30%;
  transition: 8s linear;
  -webkit-animation: shake-vertical 10s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    both;
  animation: shake-vertical 10s cubic-bezier(0.455, 0.03, 0.515, 0.955) both
    infinite;
}

#satelite2 {
  transform: rotate(50deg);
  right: 65%;
}

#debris_1 {
  position: relative;
  top: 60%;
  animation: kurve_translate 10s infinite linear;
}

@keyframes kurve_translate {
  0% {
    transform: translateX(-115%);
  }
  100% {
    transform: translateX(600%);
  }
}

@keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

@-webkit-keyframes shake-vertical {
  0%,
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
  80% {
    -webkit-transform: translateY(6.4px);
    transform: translateY(6.4px);
  }
  90% {
    -webkit-transform: translateY(-6.4px);
    transform: translateY(-6.4px);
  }
}
@keyframes shake-vertical {
  0%,
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
  80% {
    -webkit-transform: translateY(6.4px);
    transform: translateY(6.4px);
  }
  90% {
    -webkit-transform: translateY(-6.4px);
    transform: translateY(-6.4px);
  }
}
</style>
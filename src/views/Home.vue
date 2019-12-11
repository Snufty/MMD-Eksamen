<template>
  <v-app>
    <div class="home">
      <v-container id="sec_container" fluid no gutters>
        <v-row id="header" height="100">
          <v-col id="left" cols="12" sm="1"></v-col>
          <v-col id="center" cols="12" sm="10">
            <v-img src="../assets/illu_logo.svg" height="250" contain></v-img>
          </v-col>
          <v-col id="right" cols="12" sm="1"></v-col>
        </v-row>

        <v-row no gutters>
          <div id="sec_1">
            <v-img src="../assets/Debris_1.svg" height="250" width="250" id="debris_1"></v-img>
            <v-img src="../assets/Solarpanel_wing.svg" height="300" width="150" id="solar_wing"></v-img>
            <!--  Første dialog boks nedenunder  -->

            <v-dialog
              v-model="dialog1"
              max-width="800"
              scrollable
              content-class="dialog1"
              hide-overlay="true"
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  depressed
                  v-on="on"
                  color="transparent"
                  height="1"
                  width="1"
                  id="satelite"
                >
                  <v-img src="../assets/Satelite.svg" height="550" width="550"></v-img>
                </v-btn>
              </template>
              <v-card height="100%" z-index="999">
                <v-card-title class="grey_lighten-2"></v-card-title>
                <v-row no-gutters>
                  <v-col id="left">
                    <v-card-text>
                      <h1 id="whatis1">Hvad er rumaffald og hvor kommer det fra?</h1>
                      <p
                        id="pleft"
                      >Rumaffald er et menneskeskabt materiale, som kredser om Jorden men som ikke længere er funktionelt. Det kan være store ting som et kasseret rakettrin, eller en satellit som er gået i stykker eller bare er blevet efterladt efter dens mission. Det kan også være mikroskopiske ting, som et stykke afskrabet maling fra eksempelvis en raket. Meget af affaldet er i det der kaldes lavt jordkredsløb, inden for 2.000 km. af Jordens overflade. Der er dog også blevet fundet noget affald som kredser i den geostationære bane, omkring 35.000 km. væk, over ækvator</p>
                    </v-card-text>
                    <v-img
                      id="card-img"
                      contain
                      src="https://cdn.britannica.com/71/211071-131-3B491352/space-debris-orbit-junk-Earth-blue-planet.jpg"
                      height="375"
                      width="375"
                    ></v-img>
                  </v-col>
                  <v-col id="right">
                    <div id="sort_bg"></div>
                    <v-img
                      id="satellite_png"
                      contain
                      src="https://cdn.discordapp.com/attachments/649954932815822880/653941131066736680/Satelite_Lykke1.png"
                      height="300"
                      width="300"
                    ></v-img>
                    <v-img
                      id="debris_png"
                      contain
                      src="https://cdn.discordapp.com/attachments/649954932815822880/653941162125557761/Space_debris.png"
                      height="200"
                      width="250"
                    ></v-img>

                    <v-card-text>
                      <p
                        id="pright"
                      >Der findes mere end 23.000 stykker rumaffald st¿rre end 10 cm. Derudover vurderes det at der er omkring 500.000 stykker mellem 1 og 10 cm pŒ tv¾rs af rummet, og at der kan v¾re millioner af stykker mindre end 1 cm. Hvor l¾nge et stykke affald tager om at falde til Jorden igen, afh¾nger om dens h¿jde. Objekter under 600 km., kredser i flere Œr f¿r den vender tilbage til Jordens atmosf¾re. Objekter over 1.000 km kan kredse i Œrhundreder.</p>
                    </v-card-text>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-spacer></v-spacer>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="dialog1 = false">close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <!--   Anden dialog boks nedenunder    -->

            <v-dialog
              v-model="dialog2"
              max-width="400"
              scrollable
              content-class="dialog2"
              hide-overlay="true"
              
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  depressed
                  v-on="on"
                  color="transparent"
                  height="1"
                  width="1"
                  id="kamera"
                >
                  <v-img src="../assets/camera_normal.svg" contain height="100" width="100"></v-img>
                  
                </v-btn>
              </template>
              <v-card dark height="100%" id="spacebg">
                <v-img src="../assets/spacebg.png">
                
                <v-row justify="center" no-gutters="">
                 <v-card-title id="v-card-title-handske"> Den Tabte Astronaut Handske</v-card-title>
                </v-row>
                <v-row no-gutters style="height: 250px" align="center">
                   <v-img src="../assets/glove_normal.svg" contain height="100" width="100"></v-img>
                </v-row>

                <v-row no-gutters>
                  <v-layout justify-end>
                  <v-card color="rgba(255,255,255, 0.3)" width="150" id="funfact1" >
                    <v-row no-gutters justify="center">
                    <v-card-title>Vidste du?</v-card-title>
                    </v-row>
                    <p>eriam tempore porro commodi corporis! Corporis, esse. Modi numquam, ea ratione iste nobis aperiam.</p>
                  </v-card>
                  </v-layout>
                </v-row>
                </v-img>
              </v-card>
            </v-dialog>
          </div>
        </v-row>

        <v-row no gutters>
          <div id="sec_2">
            <!--   Tredje dialog boks nedenunder    -->
            <div id="astro_helmet_div">
              <v-img
                src="../assets/Astro_Helmet.svg"
                height="150"
                width="150"
                id="astro_helmet_img"
              ></v-img>
            </div>

            <v-dialog
              v-model="dialog3"
              max-width="800"
              scrollable
              content-class="dialog3"
              hide-overlay="true"
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  depressed
                  v-on="on"
                  color="transparent"
                  height="1"
                  width="1"
                  id="satelite2"
                >
                  <v-img
                    src="../assets/Satelite_Lykke1.svg"
                    height="500"
                    width="500"
                    id="satelite2_spin"
                  ></v-img>
                </v-btn>
              </template>
              <v-card dark height="100%">
                <v-row no-gutters justify="center">
                  <v-card-title>Hvorfor er rumskrald et problem?</v-card-title>
                </v-row>
                <v-row no-gutters>
                  <v-col>
                    <p>
                      Grundet de høje hastigheder (op til 8 km/s eller ca. 28.000 km/t) som affaldet kredser med om Jorden, kan et sammenstød med selv det mindste stykke affald skade et rumskib eller en satellit.
                      Eksempelvis er vinduer på rumskibe oftest nødsaget til at blive skiftet, grundet skade fra et sammenstød med et stykke affald mindre end 1 mm.
                    </p>
                    <v-layout>
                      <v-img src="../assets/vindue.png" contain height="170" width="170"></v-img>
                    </v-layout>
                  </v-col>

                  <v-col>
                    <p>Mængden af affald I rummet er faretruende både for be- og ubemandede rumfartøjer.</p>
                    <p>
                      Hvis man har sporet at der er en større chance end 1 til 100.000 for at et stykke affald sammenstøder med ISS, laver astronauterne en undvigemanøvre i form af at ISS kredsløb bliver ændret.
                      Det første sammenstød mellem en opererende satellit og et stykke rumaffald fandt sted, da et stykke fra en raket ramte Cerise, en fransk mikrosatellit.
                      Cerise blev beskadiget, men fortsatte dog med at virke.
                    </p>
                  </v-col>

                  <v-col>
                    <p>
                      En af de større sammenstød skete I februar 2009, hvor USAs aktive Iridium 33 kommunikationssatellit stødte sammen med en inaktiv Russisk satellit kaldet Cosmos 2251.
                      Sammenstødet skabte mere end 1.800 sporbare stykker affald, hvilket svarede til omkring 10% af alt sporet rumaffald dengang.
                    </p>
                    <p>Den værste rumaffalds episode skete dog tilbage I januar 2007, hvor det kinesiske militær ødelagde Fengyun-1C vejrsatellitten, i en test af et nyt anti-satellit system, hvilket skabte mere end 3.000 sporbare stykker affald, som dengang svarede til mere end 20% af alt rumaffald.</p>
                  </v-col>
                </v-row>
                <v-row no-gutters justify="center">
                  <v-img src="../assets/dialog2space.png" height="300" max-width="750"></v-img>
                </v-row>
                <v-row no-gutters>
                  <v-col align-self="center">
                    <p id="p-card-text">
                      Den største frygt angående rumaffald er at der til sidst er nok affald i rummet til at starte en kædereaktion.
                      <br />Så et sammenstød kunne teoretisk set føre til en anden, som fører til en anden, og så videre, i en katastrofal kaskade også kendt som Kessler syndromet. I værste tilfælde vil det til sidst ende ud i, at lavt jordkredsløb vil blive ubrugeligt.
                    </p>
                  </v-col>

                  <v-col align-self="center">
                    <v-layout justify-center>
                      <v-img src="../assets/giphy.gif" height="155" max-width="358"></v-img>
                    </v-layout>
                  </v-col>
                </v-row>
              </v-card>
            </v-dialog>

            <!--   Fjerde dialog boks nedenunder    -->

            <v-img src="../assets/Debris_2.svg" height="400" width="250" id="debris_2"></v-img>

            <v-dialog
              v-model="dialog4"
              max-width="300"
              scrollable
              content-class="dialog4"
              hide-overlay="true"
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  depressed
                  v-on="on"
                  color="transparent"
                  height="1"
                  width="1"
                  id="spatula"
                >
                  <v-img src="../assets/spatula_normal.svg" contain height="100" width="100"></v-img>
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>Spatula</v-card-title>
                <v-card-text>Spatula tekst her</v-card-text>
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
                  <v-btn color="primary" text @click="dialog4 = false">close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </v-row>

        <v-row no gutters>
          <div id="sec_3">
            <v-img src="../assets/Space_debris_3.svg" height="500" width="450" id="debris_3"></v-img>

            <v-dialog
              v-model="dialog5"
              max-width="400"
              scrollable
              content-class="dialog5"
              hide-overlay="true"
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  depressed
                  v-on="on"
                  color="transparent"
                  height="1"
                  width="1"
                  id="handske"
                >
                  <v-img src="../assets/glove_normal.svg" contain height="150" width="100"></v-img>
                </v-btn>
              </template>
              <v-card dark height="100%" id="spacebg">
                <v-img src="../assets/Space-pillars.png">
                
                <v-row justify="center" no-gutters="" >
                 <v-card-title><p id="handske-overskrift" style="font-size:25px;">Den Tabte Astronaut Handske</p></v-card-title>
                </v-row>
                <v-row no-gutters style="height: 210px" align="center">
                   <v-img src="../assets/glove_normal.svg" contain height="180" width="200" style="transform: rotate(-90deg);"></v-img>
                </v-row>

                <v-row no-gutters>
                  <v-layout justify-end>
                  <v-card color="rgba(255,255,255, 0.1)" width="230" id="funfact1" >
                    <v-row no-gutters justify="center">
                    <v-card-title>Vidste du?</v-card-title>
                    </v-row>
                    <p id="handske-text" >I år 1965, da den allerførste astronaut, Ed White, var ved at udføre en satellit-indhentelses operation, slap han sin handske i rummet omkring ham. Handsken blev i kredsløb, i en måned, før den til sidst brændte op, i Jordens atmosfæren.</p>
                  </v-card>
                  </v-layout>
                </v-row>
                </v-img>
              </v-card>
            </v-dialog>
            <div id="debris_4_div">
              <v-img src="../assets/Debris_4.svg" height="600" width="400" id="debris_4"></v-img>
            </div>
          </div>
        </v-row>

        <v-row no gutters>
          <div id="sec_4">
            <v-img src="../assets/nasa_booster.svg" height="300" width="250" id="nasa_booster"></v-img>

            <v-dialog
              v-model="dialog6"
              max-width="300"
              scrollable
              content-class="dialog6"
              hide-overlay="true"
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  depressed
                  v-on="on"
                  color="transparent"
                  height="1"
                  width="1"
                  id="netskyder"
                >
                  <v-img src="../assets/net_normal.svg" contain height="400" width="400"></v-img>
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>Netskyder</v-card-title>
                <v-card-text>Netskyder tekst her</v-card-text>
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
                  <v-btn color="primary" text @click="dialog6 = false">close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
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
      dialog3: false,
      dialog4: false,
      dialog5: false,
      dialog6: false,

      links: ["referencer"]
    };
  }
};
</script>

<style lang="scss">
#sec_container {
  padding: 0;
  margin: 0;
  background-image: url("../assets/background_earth_final.svg");
  background-size: cover;
}

#sec_1 {
  height: 100vh;
  width: 100vw;
}

#debris_1 {
  position: relative;
  top: 60%;
  animation: kurve_translateX 10s infinite linear;
}

#solar_wing {
  position: relative;
  bottom: 30%;
  animation: kurve_translateX 10s infinite linear;
}

#satelite {
  position: absolute;
  right: 30%;
  z-index: 99;
  transition: 8s linear;
  -webkit-animation: shake-vertical 10s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    both;
  animation: shake-vertical 10s cubic-bezier(0.455, 0.03, 0.515, 0.955) both
    infinite;
}

#kamera {
  position: absolute;
  left: 22%;
  top: 20%;
  transition: 10s linear;
  -webkit-animation: shake-vertical 10s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    both;
  animation: shake-vertical 10s cubic-bezier(0.455, 0.03, 0.515, 0.955) both
    infinite;
}

#sec_2 {
  height: 100vh;
  width: 100vw;
}

#satelite2 {
  position: absolute;
  left: 35%;
  top: 40%;
  z-index: 99;
  transform: rotate(60deg);
}

#satelite2_spin {
  transition: 10s linear;
  -webkit-animation: shake-vertical 10s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    both;
  animation: shake-vertical 10s cubic-bezier(0.455, 0.03, 0.515, 0.955) both
    infinite;
}

#astro_helmet_img {
  animation: kurve_translateX 8s infinite linear reverse;
  position: relative;
}

#astro_helmet_div {
  position: relative;
  animation: kurve_translateY 8s infinite linear;
}

#debris_2 {
  position: relative;
  animation: kurve_translateX 15s infinite linear;
  top: 30%;
}

#debris_3 {
  position: relative;
  animation: kurve_translateX 17s infinite linear reverse;
}

#debris_4_div {
  position: relative;
  animation: kurve_translateY 12s infinite linear;
  bottom: 30%;
}

#debris_4 {
  position: relative;
  animation: kurve_translateX 12s infinite linear;
}

#nasa_booster {
  position: relative;
  animation: kurve_translateX 19s infinite linear reverse;
  top: 30%;
}

#spatula {
  position: absolute;
  right: 18%;
  top: 48%;
  transition: 10s linear;
  -webkit-animation: shake-vertical 10s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    both;
  animation: shake-vertical 10s cubic-bezier(0.455, 0.03, 0.515, 0.955) both
    infinite;
}

#sec_3 {
  height: 100vh;
  width: 100vw;
}

#handske {
  position: absolute;
  left: 20%;
  top: 60%;
  transition: 10s linear;
  -webkit-animation: shake-vertical 10s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    both;
  animation: shake-vertical 10s cubic-bezier(0.455, 0.03, 0.515, 0.955) both
    infinite;
}

#sec_4 {
  height: 100vh;
  width: 100vw;
}

#netskyder {
  position: absolute;
  left: 23%;
  top: 84%;
  transition: 10s linear;
  -webkit-animation: shake-vertical 10s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    both;
  animation: shake-vertical 10s cubic-bezier(0.455, 0.03, 0.515, 0.955) both
    infinite;
}

/* Dialog Layout SCSS */

h1 {
  margin: 0 0 0 20px;
}

#handske-text{
  text-align: right;
  margin: 0 10px 0 10px;
}

#handske-overskrift{
 
  font-weight: bold;
}

.dialog3 p {
  font-size: 16px;
  text-align: left;
  margin: 0 0 0 17px;
}

#funfact1{
  margin-right: 15px;
  margin-bottom: 15px;
}

#p-card-text {
  text-align: justify;
  margin: 5px 0 0 17px;
}

#whatis1 {
  line-height: 1.1;
}

#spalter1 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

#left {
  padding: 0 0 0 20px;
}

#right {
  padding: 0 20px 0 0;
}

#sort_bg {
  height: 400px;
  width: 200px;
  background-color: black;
  margin-left: 100px;
}

#card-img {
  position: relative;
  margin: 0 0 0 20px;
}

#satellite_png {
  position: absolute;
  margin: -450px 0 0 50px;
}

#debris_png {
  position: absolute;
  margin: -200px 0 0 100px;
  transform: rotate(180deg);
}
#pleft {
  margin: 30px 0 0 20px;
  justify-content: center;
  text-align: justify;
}

#pright {
  margin: 30px 15px 0 0;
  justify-content: center;
  text-align: justify;
}

/* Animationer */

@keyframes kurve_translateX {
  0% {
    transform: translateX(-115%);
  }
  100% {
    transform: translateX(1000%);
  }
}

@keyframes kurve_translateY {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(100%);
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
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
          <v-dialog
      v-model="dialog7"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="transparent"
          dark
          v-on="on"
        >
          <div id="help">
            <h2 id="help_text">Guide</h2>
            <p id="tryk_her">(Tryk her)</p>
          </div>
        </v-btn>
      </template>
      <v-card>
        <v-card-title
          class="yellow accent-3 justify-center font-weight-bold"
          primary-title text=""
        >
          GUIDE
        </v-card-title>
        <v-card-text id="guide_indhold">
          Velkommen til Illustreret Videnskabs interaktive hjemmeside omkring rumaffald.
Her kan du finde informationer og sjove facts vedrørende hvor rumaffald kommer fra, hvorfor det er et problem og hvad der kan gøres ved det.
Vi opfordre dig til at udforske hjemmesiden og finde alle 6 infobokse. <br> <br> Herunder kan du se et eksempel på en af de infobokse der er på siden:
        </v-card-text>
        <div id="example">
        <v-img
                    src="../assets/Asset_v1.svg"
                    height="280"
                    width="280"
                    id="satelite2_spin"
                    contain
                  ></v-img>
        </div>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="black"
            text
            @click="dialog7 = false"
          >
            Okay
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
                  <v-img class="scale" src="../assets/Satelite.svg" height="400" width="400"></v-img>
                </v-btn>
              </template>
              <v-card dark height="100%" z-index="999">
                <v-card-title class="grey_lighten-2"></v-card-title>
                <v-row no-gutters>
                  <v-col id="left">
                    <v-card-text>
                      <h1 id="whatis1">Hvad er rumaffald og hvor kommer det fra?</h1>
                      <p
                        id="pleft"
                      >Rumaffald er et stykke menneskeskabt materiale, som kredser om Jorden men som ikke længere er funktionelt. Det kan være store ting som en kasseret raket del, eller en satellit som er gået i stykker eller bare er blevet efterladt efter dens mission. Det kan også være meget små ting, som et stykke afskrabet maling fra eksempelvis en raket. Meget af affaldet er i det der kaldes lavt jordkredsløb, inden for 2.000 km. af Jordens overflade. Der er dog også blevet fundet affald som kredser i den geostationære bane, omkring 35.000 km. over ækvator.</p>
                    </v-card-text>
                    <v-img
                      id="card-img"
                      contain
                      src="https://media.giphy.com/media/h7LPqQE2pZVh8fKBRf/giphy.gif"
                      height="385"
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
                      >Der findes mere end 23.000 stykker rumaffald større end 10 cm. Derudover vurderes det at der er omkring 500.000 stykker mellem 1 og 10 cm. på tværs og at der kan være flere millioner af stykker mindre end 1 cm. Hvor længe et stykke affald tager om at falde til Jorden igen, afhænger af dens vægt og afstand til Jorden. Objekter med under 600 kilometers afstand til Jorden, kredser i flere år før de vender tilbage til Jordens atmosfære. Objekter med over 1.000 kilometers afstand til Jorden, kan kredse i århundreder.</p>
                    </v-card-text>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-spacer></v-spacer>
                <v-divider></v-divider>
              </v-card>
            </v-dialog>

            <!--   Anden dialog boks nedenunder    -->

            <v-dialog
              v-model="dialog2"
              max-width="450"
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
                  <v-img class="scale" src="../assets/camera_normal.svg" contain height="100" width="100"></v-img>
                </v-btn>
              </template>
              <v-card dark height="100%" id="spacebg">
                <v-img src="https://wallpaperplay.com/walls/full/5/f/f/104395.jpg">
                  <v-row justify="center" no-gutters>
                    <v-card-title>
                      <p id="kamera-overskrift" style="font-size:25px;">Sunitas kamera</p>
                    </v-card-title>
                  </v-row>
                  <v-row no-gutters style="height: 220px" align="center">
                    <v-img
                      src="https://media.giphy.com/media/fVmYIKGS3j3WXNdzxH/giphy.gif"
                      contain
                      height="250"
                      width="300"
                    ></v-img>
                  </v-row>

                  <v-row no-gutters>
                    <v-layout justify-center>
                      <v-card color="rgba(255,255,255, 0.6)" width="250" id="funfact3">
                        <v-row no-gutters justify="center">
                          <v-card-title style="color:black;">Vidste du?</v-card-title>
                        </v-row>

                        <p id="tekst-margin" style="color:black;">
                          Da astronauten Sunita Williams kæmpede med et solpanel, som sad fast på rumstationen i 2007, kom hendes kamera til at gå løs og fløj væk ud i rummet.
                          Det var dog ikke hendes fejl at det fløj væk, da man mener at der var sket en teknisk fejl, i forhold til knappen der spændte kameraet fast.
                        </p>
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
                    src="../assets/Asset_v1.svg"
                    height="300"
                    width="300"
                    id="satelite2_spin"
                    contain
                  ></v-img>
                </v-btn>
              </template>
              <v-card dark height="100%">
                <v-row no-gutters justify="center">
                  <v-card-title>
                    <h2>Hvorfor er rumaffald et problem?</h2>
                  </v-card-title>
                </v-row>
                <v-row id="dialog3padding" no-gutters>
                  <v-col>
                    <p>
                      Grundet de høje hastigheder (op til 8 km/s eller ca. 28.000 km/t) som affaldet kredser med om Jorden, kan et sammenstød med selv det mindste stykke affald skade et rumskib eller en satellit. Eksempelvis er vinduer på rumskibe oftest nødsaget til at blive skiftet, grundet skader fra et sammenstød med et stykke affald på mindre end 1 mm.
                    </p>
                    <v-layout>
                      <v-img src="../assets/vindue.png" contain height="170" width="170"></v-img>
                    </v-layout>
                  </v-col>

                  <v-col>
                    <p>Mængden af affald I rummet er faretruende både for bemandede og ubemandede rumfartøjer. Hvis man opdager at der er en større chance end 1 til 100.000 for at et stykke affald rammer Den Internationale Rumstation, laver astronauterne en undvigemanøvre i form af at dens kredsløb bliver ændret.
                       <br> <br> <br> Det første sammenstød mellem en opererende satellit og et stykke rumaffald fandt sted, da et stykke fra en raket ramte Cerise, en fransk mikrosatellit. Cerise blev beskadiget, men fortsatte dog med at virke.</p>
                  </v-col>

                  <v-col>
                    <p>
                      En af de større sammenstød skete I februar 2009, hvor USAs aktive kommunikationssatellit, ved navn Iridium 33, stødte sammen med en inaktiv Russisk satellit kaldet Kosmos 2251. Sammenstødet skabte mere end 1.800 stykker affald store nok til at blive sporet fra Jorden, hvilket svarede til omkring 10% af alt sporet rumaffald dengang.
                    </p>
                    <p>Den værste rumaffalds episode skete dog tilbage I januar 2007, hvor det kinesiske militær ødelagde vejrsatellitten Fengyun-1C , i en test af et nyt anti-satellit system, hvilket skabte mere end 3.000 stykker sporbare affald, som dengang svarede til mere end 20% af alt rumaffald.</p>
                  </v-col>
                </v-row>
                <v-row no-gutters justify="center">
                  <v-img src="../assets/dialog2space.png" height="300" max-width="750"></v-img>
                </v-row>
                <v-row no-gutters>
                  <v-col align-self="center">
                    <p id="p-card-text">
                      Den største frygt angående rumaffald er at der til sidst er nok affald i rummet til at starte en kædereaktion.
                      <br />Så et sammenstød kunne teoretisk set føre til en anden, som fører til tusindvis af andre sammenstød, i en katastrofal kaskade også kendt som Kessler syndromet. I værste tilfælde vil det betyde, at lavt jordkredsløb vil blive utilgængelig.
                    </p>
                    <div id="dialog3intet"></div>
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
              max-width="490"
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
                  <v-img class="scale" src="../assets/malerspatel.svg" contain height="100" width="100"></v-img>
                </v-btn>
              </template>
              <v-card dark height="100%" id="spacebg">
                <v-img
                  src="https://image.winudf.com/v2/image1/Y29tLm1vYmlsZXVuaXZlcnNpdHkuc3BhY2Vfc2NyZWVuXzRfMTU0MzI5MzcwMF8wNTg/screen-4.jpg?fakeurl=1&type=.jpg"
                >
                  <v-row justify="start" no-gutters>
                    <v-card-title>
                      <p id="spatula-overskrift" style="font-size:25px;">
                        "That was my
                        <br />favourite spatch"
                        <br />-Piers Sellers
                      </p>
                    </v-card-title>
                  </v-row>
                  <v-row no-gutters style="height: 210px" align="center">
                    <v-img
                      src="../assets/malerspatel.svg"
                      contain
                      height="150"
                      width="150"
                      style="transform: rotate(-90deg);"
                    ></v-img>
                  </v-row>

                  <v-row no-gutters>
                    <v-layout justify-end>
                      <v-card color="rgba(255,255,255, 0.8)" width="280" id="funfact1">
                        <v-row no-gutters justify="center">
                          <v-card-title style="color:black;">Vidste du?</v-card-title>
                        </v-row>

                        <p id="dialog-text" style="color:black;">
                          I 2006, var rumfærgen Discovery på en rumfart til den Internationale Rumstation.
                          På en af missionerne skulle de lave en test af et af de nye materialer til at reparere varmeskjoldet med.
                          Men da astronauten Piers Sellers, skulle smøre den slimede substans ud, tabte han ved en fejltagelse malerspatelen, som han brugte til at smøre ud med.
                          Piers Sellers sagde senere til pressen: "That was my favourite spatch" og "Don't tell the other spatulas".
                        </p>
                      </v-card>
                    </v-layout>
                  </v-row>
                </v-img>
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
                  <v-img class="scale" src="../assets/glove_normal.svg" contain height="150" width="100"></v-img>
                </v-btn>
              </template>
              <v-card dark height="100%" id="spacebg">
                <v-img src="../assets/Space-pillars.png">
                  <v-row justify="center" no-gutters>
                    <v-card-title>
                      <p id="handske-overskrift" style="font-size:25px;">Den Tabte Astronaut Handske</p>
                    </v-card-title>
                  </v-row>
                  <v-row no-gutters style="height: 210px" align="center">
                    <v-img
                      src="../assets/glove_normal.svg"
                      contain
                      height="180"
                      width="200"
                      style="transform: rotate(-90deg);"
                    ></v-img>
                  </v-row>

                  <v-row no-gutters>
                    <v-layout justify-end>
                      <v-card color="rgba(255,255,255, 0.1)" width="230" id="funfact2">
                        <v-row no-gutters justify="center">
                          <v-card-title>Vidste du?</v-card-title>
                        </v-row>
                        <p
                          id="handske-text"
                        >I år 1965, da den allerførste astronaut, Ed White, skulle indhente en satellit, mistede han sin handske i rummet. Handsken blev i kredsløb i en måned, før den til sidst brændte op i Jordens atmosfære.</p>
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

        <v-row no-gutters>
          <div id="sec_4">
            <v-img src="../assets/nasa_booster.svg" height="300" width="250" id="nasa_booster"></v-img>

            <v-dialog
              v-model="dialog6"
              max-width="1200"
              height="100%"
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
                  <v-img class="scale" src="../assets/net_normal.svg" contain height="400" width="400"></v-img>
                </v-btn>
              </template>
              <v-card dark height="100%">
                <v-card-title class="grey_lighten-2"></v-card-title>
                <v-row no-gutters>
                  <v-col id="netskyder-titel-left" height="250">
                    <v-card-text>
                      <h1 id="whatis3">Hvordan kan vi løse problemet?</h1>
                    </v-card-text>
                    <v-card-text id="pleft_padding">
                      <p
                        id="pleftsec3"
                      >Rumaffald er et globalt problem, som kræver en global respons og som skal løses på et globalt plan. Efterhånden som mængden af rumaffald stiger, begynder mange forskere og organisationer at undersøge og teste hvad vi kan gøre ved det og der er mange bud på en eventuel løsning. Alt fra net og magneter til lasere.</p>
                    </v-card-text>
                  </v-col>
                  <v-col id="sec4-right" height="250">
                    <v-img
                      id="midpic"
                      contain
                      src="../assets/spacedebris2030.jpg"
                      height="250"
                      width="600"
                    ></v-img>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-card-text>
                    <h1 id="whatis4">Nedenunder kan du se 3 eksempler på mulige løsninger</h1>
                  </v-card-text>
                </v-row>
                <v-row no-gutters>
                  <v-col id="col1">
                    <h2 id="h2_1">Første metode:</h2>
                    <h3>Minisatellit fanger rumaffald med net</h3>
                    <p
                      id="psec3_1"
                    >Den Elektro Dynamiske Affalds Eliminator, på engelsk også forkortet til EDDE, kan fjerne næsten alle ca. 2500 objekter der vejer mere 2 kg., som er i lavt jordkredsløb. Det er mere end 99% af alt massen, sammenstøds arealet og sammenstøds potentialet. EDDE bruger jordens magnetfelt som drivkraft og kan flyve ca. 200 km. om dagen og skifte kredsløbsbane med 1,5° om dagen. Efter at have fanget et objekt trækkes den ned mod jordens atmosfære for at brænde op. Efter at have frigivet objektet, kan EDDE finde frem til, og flyve hen til et nyt objekt inden for få dage. Avanceret billedteknologi gør det nemt at finde det rette kredsløb fra store afstande. Et dusin EDDE-fartøjer kan fjerne næsten alle 2166 tons affald på ca. 7 år.</p>
                    <v-img
                      id="img1"
                      src="https://media.giphy.com/media/fYexKcRTSFumjejKPe/giphy.gif"
                      height="295"
                      width="300"
                    ></v-img>
                  </v-col>
                  <v-col id="col2">
                    <h2 id="h2_2">Anden metode:</h2>
                    <h3>Titaniumhapun spider rumaffald</h3>
                    <p
                      id="psec3_1"
                    >Ingeniøre fra Airbus Engineers U.K har udviklet en lille satellit med en harpun til indsamling af små til mellemstore stykker affald. I GIF’en neden under kan man se den første test dette design har gennemgået, i rummet vel at mærke.</p>
                    <v-img
                      id="img2"
                      src="https://media.giphy.com/media/pVCfMRDmtxw2x8uQDt/giphy.gif"
                      height="300"
                      width="300"
                      contain
                    ></v-img>
                    <p
                      id="psec3_1"
                    >Her kan vi se en lille titaniumplade for enden af en karbonfiberstang. Harpunen affyres og penetrere med lethed titanium pladen. Harpunen rammer pladen med ca. 20 m/s og aktivere flere modhager vha. fjedre, så den sidder bedre fast. Karbonfiberstangen, som pladen sad fast på, kunne dog ikke holde til slaget og knækkede af. Efter at harpunen sidder godt fast udløser satellitten en slags “faldskærm”, der hjælper med at trække satellitten og rum affaldet ned i jordens atmosfære for at brænde op.</p>
                  </v-col>
                  <v-col id="col3">
                    <h2 id="h2_2">Tredje metode:</h2>
                    <h3>Atmosfærisk tryk tvinger rumaffald tilbage mod Jorden</h3>
                    <p
                      id="psec3_1"
                    >Atmosfærisk tryk, også kaldet Huff and Puff, er en løsning, som Space Debris Elimination (SpaDE) er kommet op med, og det går ud på at affyre målrettede luft-eksplosioner mod rumaffald. Dette vil sænke farten på rumaffaldet, hvilket resulterer i at det hurtigere falder tilbage mod Jordens atmosfære, for at brænde op. Eksplosions-materialet falder selv tilbage i Jordens atmosfæren og brænder op. Derfor efterlader det intet nyt affald.</p>
                    <div id="hvid_div"></div>
                    <v-img id="img3" src="../assets/huff_puff.svg" height="300" width="300" cover></v-img>
                    <v-img
                      id="broken_sat_2"
                      src="../assets/broken_sat_2.svg"
                      height="250"
                      width="300"
                      contain
                    ></v-img>
                  </v-col>
                </v-row>
                <div id="intet"></div>
              </v-card>
            </v-dialog>
          </div>
        </v-row>
      </v-container>
      <v-footer color="#ffe400" padless>
        <v-row justify="center" no-gutters>
          <v-btn
            v-btn
            :to="{name: 'referencer'}"
            v-for="link in links"
            :key="link"
            color="black"
            text
            rounded
            class="my-2"
          >{{ link }}</v-btn>
          <v-col class="#ffe400 py-4 text-center black--text" cols="12">
            {{ new Date().getFullYear() }} —
            <strong>Illustreret Videnskab</strong>
          </v-col>
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
      dialog7: false,

      links: ["referencer"]
    };
  }
};
</script>

<style lang="scss">
#help {
  clip-path: polygon(50% 0%, 100% 50%, 100% 0);
  background-color: #ffe400;
  position: absolute;
  z-index: 99999;
  height: 400px;
  width: 400px;
  margin-left: 1060px;
  margin-top: -92px;
}

#help_text {
  color: black;
  margin: 35px 0 0 260px;
  font-family: "Titillium Web", sans-serif;
  transform: rotate(46deg);
  font-size: 35px;
}

#tryk_her {
  color: black;
  margin: -12px 10px 0 228.5px;
  font-family: "Titillium Web", sans-serif;
  transform: rotate(46deg);
  font-size: 10px;
}

#guide_indhold {
  margin-top: 20px;
  color: black;
  text-align: left;
}

#example {
  margin-left: 125px;
}

h1 {
  margin: 0 0 0 20px;
}
#sec_container {
  padding: 0;
  margin: 0;
  background-image: url("../assets/background_earth_final.svg");
  background-size: cover;
}
/* SCSS - Section 1 */
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

/* SCSS - Section 1: Dialog 1 */
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

.scale {
  transition: 1s;
}

.scale:hover {
   transform: scale(1.2);
    transition: 1s;
    
}

#left {
  padding: 0 0 0 20px;
}

#whatis1 {
  line-height: 1.1;
}

#pleft {
  margin: 30px 0 0 20px;
  justify-content: center;
  text-align: left;
  font-size: 16px;
}

#card-img {
  position: relative;
  margin: 0 0 0 20px;
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

#satellite_png {
  position: absolute;
  margin: -450px 0 0 50px;
}

#debris_png {
  position: absolute;
  margin: -200px 0 0 100px;
  transform: rotate(180deg);
}

#pright {
  margin: 30px 15px 0 47px;
  justify-content: center;
  text-align: left;
  font-size: 16px;
}

/* SCSS - Section 1: Dialog 2 */

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

#kamera-overskrift {
  font-weight: bold;
}
#funfact3 {
  margin-top: 120px;
  margin-bottom: 40px;
}
#tekst-margin {
  margin-left: 5px;
  margin-right: 5px;
}

/* SCSS - Section 2 */
#sec_2 {
  height: 100vh;
  width: 100vw;
}

#astro_helmet_img {
  animation: kurve_translateX 8s infinite linear reverse;
  position: relative;
}

#astro_helmet_div {
  position: relative;
  animation: kurve_translateY 8s infinite linear;
}
/* SCSS - Section 2 Dialog 3*/
#dialog3padding {
  padding: 0 40px 0 20px;
}

#satelite2 {
  position: absolute;
  left: 20%;
  top: 40%;
  z-index: 99;
  transition: 1s;
}

#satelite2_spin {
  transition: 10s linear;
  -webkit-animation: shake-vertical 10s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    both;
  animation: shake-vertical 10s cubic-bezier(0.455, 0.03, 0.515, 0.955) both
    infinite;
}

#satelite2:hover {
  transform: scale(1.2);
    transition: 1s;
}

.dialog3 p {
  font-size: 16px;
  text-align: left;
  margin: 0 0 0 17px;
}

#p-card-text {
  text-align: left;
  margin: 10px 0 -10px 25px;
}

#dialog3intet {
  height: 20px;
}

/* SCSS - Section 2: Dialog 4 */

#debris_2 {
  position: relative;
  animation: kurve_translateX 15s infinite linear;
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

#spatula-overskrift {
  font-weight: bold;
}

#funfact1 {
  margin-right: 15px;
  margin-bottom: 15px;
}

#dialog-text {
  text-align: left;
  margin: 0 10px 0 10px;
}

/* SCSS - Section 3 */
#sec_3 {
  height: 100vh;
  width: 100vw;
}

#debris_3 {
  position: relative;
  animation: kurve_translateX 17s infinite linear reverse;
}

/* SCSS - Section 2: Dialog 5 */

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

#handske-overskrift {
  font-weight: bold;
}

#funfact2 {
  margin-right: 15px;
  margin-bottom: 15px;
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

/* SCSS - Section 4 */
#sec_4 {
  height: 100vh;
  width: 100vw;
}

#nasa_booster {
  position: relative;
  animation: kurve_translateX 19s infinite linear reverse;
  top: 30%;
}

/* SCSS - Section 4: Dialog 6*/

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

#netskyder-titel-left {
  padding: 0 0 0 20px;
}

#whatis3 {
  justify-content: center;
}

#pleft_padding {
  padding: 0 80px 0 80px;
}

#pleftsec3 {
  margin: 30px 0 0 20px;
  justify-content: center;
  text-align: left;
  font-size: 17px;
}

#sec4-right {
  padding: 0 20px 0 0;
}

#midpic {
  margin: 0;
  padding: 0;
}

#whatis4 {
  margin: 60px 0 0 0;
}

#col1 {
  padding: 0 50px 0 50px;
}

#h2_1 {
  margin: 20px 0 0 0;
}

#psec3_1 {
  margin: 20px 0 0 0;
  text-align: left;
}

#img1 {
  margin-top: 60px;
}

#col2 {
  padding: 0 50px 0 50px;
}

#h2_2 {
  margin: 20px 0 0 0;
}

#img2 {
  margin-top: 30px;
}

#col3 {
  padding: 0 50px 0 50px;
}

#img3 {
  top: 60%;
  left: 72%;
  position: absolute;
}

#hvid_div {
  width: 340px;
  height: 300px;
  background-color: white;
  margin: 30px -20px 0 -20px;
  position: absolute;
}

#broken_sat_2 {
  position: absolute;
  margin: 250px 0 -20px -60px;
}

#intet {
  height: 20px;
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
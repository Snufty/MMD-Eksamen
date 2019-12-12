<template>
  <v-app>
    <div class="home">
      <v-container id="ref" fluid no gutters>
        <v-row id="header" height="100">
          <v-col id="left" cols="12" sm="1"></v-col>
          <v-col id="center" cols="12" sm="10">
            <a href="/">
              <v-img src="../assets/illu_logo.svg" height="250" contain></v-img>
            </a>
          </v-col>
          <v-col id="right" cols="12" sm="1"></v-col>
        </v-row>

        <v-row no gutters>
          <v-col id="ref_liste">
            <p>National Geographic 9. December kl. 12:25</p>
            <a
              href="https://www.nationalgeographic.com/science/space/reference/space-junk/"
              target="_blank"
            >https://www.nationalgeographic.com/science/space/reference/space-junk/</a>
            <p>Natural History Museum 10. December kl. 11:30</p>
            <a
              href="https://www.nhm.ac.uk/discover/what-is-space-junk-and-why-is-it-a-problem.html"
              target="_blank"
            >https://www.nhm.ac.uk/discover/what-is-space-junk-and-why-is-it-a-problem.html</a>
            <p>Nasa 10. December kl. 12:15</p>
            <a
              href="https://www.nasa.gov/mission_pages/station/news/orbital_debris.html"
              target="_blank"
            >https://www.nasa.gov/mission_pages/station/news/orbital_debris.html</a>
            <p>Encyclopædia Britannica 10. December kl. 12:30</p>
            <a
              href="https://www.britannica.com/technology/space-debris"
              target="_blank"
            >https://www.britannica.com/technology/space-debris</a>
            <p>Space.com 11. December kl. 11:45</p>
            <a
              href="https://www.space.com/space-junk-harpoon-removedebris-satellite-video.html"
              target="_blank"
            >https://www.space.com/space-junk-harpoon-removedebris-satellite-video.html</a>
            <p>BBC.com 11. December kl. 13:00</p>
            <a
              href="https://www.bbc.com/news/science-environment-47252304"
              target="_blank"
            >https://www.bbc.com/news/science-environment-47252304</a>
            <p>AmosTech 11. December kl. 11:02</p>
            <a
              href="https://www.amostech.com/TechnicalPapers/2010/Posters/Levin.pdf"
              target="_blank"
            >https://www.amostech.com/TechnicalPapers/2010/Posters/Levin.pdf</a>
            <p>Nasa 11. December kl. 12:13</p>
            <a
              href="https://www.nasa.gov/directorates/spacetech/niac/2011_space_debris_elimination/"
              target="_blank"
            >https://www.nasa.gov/directorates/spacetech/niac/2011_space_debris_elimination/</a>
          </v-col>
        </v-row>
      </v-container>

      <v-footer color="#ffe400" padless>
        <v-row justify="center" no-gutters>
          <v-btn
            v-btn
            :to="{name: 'home'}"
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
      links: ["Home"]
    };
  }
};
</script>



<style lang="scss">
#sec_1 {
  height: 100vh;
  width: 100vw;
}

#ref {
  background-color: black;
}

#ref_liste {
  height: 700px;
  width: 100vw;
}

#ref p {
  font-size: 25px;
  color: white;
}

a {
  text-decoration: none;
}
</style>
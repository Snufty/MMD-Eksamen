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
          <div id="sec_1"></div>
        </v-row>
      </v-container>

      <v-footer color="deep-purple darken-1" padless>
        <v-row justify="center" no-gutters>
          <v-btn
            v-btn
            :to="{name: 'home'}"
            v-for="link in links"
            :key="link"
            color="white"
            text
            rounded
            class="my-2"
          >{{ link }}</v-btn>
          <v-col class="deep-purple darken-2 py-4 text-center white--text" cols="12">
            {{ new Date().getFullYear() }} —
            <strong>illustreret videnskab</strong>
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
</style>
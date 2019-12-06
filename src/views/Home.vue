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
          <div id="sec_1"></div>
        </v-row>

        <v-row no gutters>
          <div id="sec_2"></div>
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
  name: "home"
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
</style>
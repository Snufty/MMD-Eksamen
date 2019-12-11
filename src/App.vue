<template>
  <div id="app">
    <router-link to="/Referencer"></router-link>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Titillium Web", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1d7ad6;
}

@import url("https://fonts.googleapis.com/css?family=Titillium+Web&display=swap");

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

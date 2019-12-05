<template>
  <div class="home">
    <header id="header">
      <div id="left-nav"></div>
      <div id="center-nav"></div>
      <div id="right-nav"></div>
    </header>
    <section id="top-section"></section>
    <section id="middle-section"></section>
    <section id="bottom-section"></section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home"
};
</script>

<style lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
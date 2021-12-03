<template>
  <Header />
  <nav class="wrapper">
    <nav class="tables">
      <a href="spain.html" class="link-form">Spain</a>
      <a href="germany.html" class="link-form">Germany</a>
      <a href="italy.html" class="link-form">Italy</a>
      <a href="france.html" class="link-form">France</a>
    </nav>
    <div
      id="wg-api-football-standings"
      data-host="v3.football.api-sports.io"
      data-league="39"
      data-team=""
      data-season="2021"
      data-key="10d96ae7e6e1e7c9ba5d8cac77747dd0"
      data-theme=""
      data-show-errors="true"
      class="api_football_loader"
    ></div>
  </nav>
  <footer>
    <p id="footer">Explore The Snitch</p>
    <nav class="icons">
      <a href="#" title="twitter"><i class="fa fa-twitter"></i></a>
      <a href="#" title="facebook"><i class="fa fa-facebook"></i></a>
      <a href="#" title="instagram"><i class="fa fa-instagram"></i></a>
      <a href="#" title="pinterest"><i class="fa fa-pinterest"></i></a>
      <a href="#" title="vimeo"><i class="fa fa-vimeo"></i></a>
    </nav>
    <nav class="links-footer">
      <router-link to="/News" class="home-link">Home</router-link>
      <a href="#">Services</a>
      <router-link to="/AboutUs">About</router-link>
      <a href="#">Terms</a>
      <a href="#">Privacy policy</a>
    </nav>
    <nav class="copyright"><p>Copyright © 2021 The Snitch</p></nav>
  </footer>
</template>

<script>
import Header from "../components/headers/Header.vue";
export default {
  components: {
    Header,
  },
  mounted() {
    let svgImg = document.createElement("script");
    svgImg.setAttribute("src", "https://kit.fontawesome.com/4a93b75334.js");
    svgImg.setAttribute("crossorigin", "anonymous");
    document.head.appendChild(svgImg);
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/styles";
.tables {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 1vh 0 2vh 0;
}

.link-form {
  margin-right: 1vw;
  font-size: 20px;
}
</style>

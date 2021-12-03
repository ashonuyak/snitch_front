<template>
  <Header />
  <nav class="wrapper">
    <table>
      <tr>
        <td>Name</td>
        <td>Phone Number</td>
        <td>Working Hours</td>
      </tr>
      <tr>
        <td>Bohdan</td>
        <td>0990087324</td>
        <td>8:00-17:00</td>
      </tr>
      <tr>
        <td>Nikita</td>
        <td>0990087356</td>
        <td>14:00-23:00</td>
      </tr>
      <tr>
        <td>Artem</td>
        <td>0990087378</td>
        <td>20:00-05:00</td>
      </tr>
      <tr>
        <td>Stas</td>
        <td>0990087312</td>
        <td>02:00-11:00</td>
      </tr>
    </table>
    <a href="thesnitch@gmail.com">Our email</a>
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
footer {
  margin-top: 80vh;
}
</style>

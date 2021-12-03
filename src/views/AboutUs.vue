<template>
  <Header />
  <nav class="wrapper">
    <nav class="about-us">
      <nav class="about-us-text">
        <p>
          <b>Опис предметного середовища: </b><i>"The Snitch"</i> - головне
          сучасне медіа про актуальні футбольні новини та осередок найгарячіших
          інсайдів найпопулярнішого світового виду спорту. З англійської назва
          сайту перекладається як "стукач", проте засновники сайту наполягають,
          що назва пішла із серії фільмів про Гаррі Поттера, який періодично
          грав у славнозвісну гру квідич та ловив золотий снітч, який був
          занадто швидким для більшості гравців.
        </p>
        <p class="test"><b>Тема:</b> сайт футбольних новин.</p>
        <p>
          <b>Мета:</b> створення медіа-ресурсу для перегляду останніх новин
          світу футболу.
        </p>

        <p><b>Користувач:</b></p>
        <ul class="lists">
          <li>перегляд новин</li>
          <li>перегляд останніх інсайдів</li>
          <li>перегляд таблиць чемпіонатів у режимі реального часу</li>
          <li>лайк/дизлайк новин</li>
          <li>зв'язок з адміністратором</li>
          <li>вхід в обліковий запис</li>
          <li>реєстрація</li>
        </ul>
        <p><b>Адміністратор</b> (крім того, що може користувач):</p>
        <ul class="lists">
          <li>створення новин</li>
          <li>редагування новин</li>
          <li>видалення новин</li>
          <li>модерація користувачів</li>
        </ul>

        <form action="/Contacts">
          <button>Contact us</button>
        </form>
      </nav>
      <img
        src="../assets/images/snitch.jpeg"
        width="600px"
        height="300px"
        class="snitch-img"
      />
    </nav>
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
  margin-top: 100px;
}
.snitch-img{
  width: 600px;
  height: 300px;
}
</style>

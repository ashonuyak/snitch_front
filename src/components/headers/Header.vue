<template>
    <header>
    <router-link to="/News" class="logo">
      <img src="../../assets/images/logo.png" />
    </router-link>
    <nav class="headers-menu">
      <router-link to="/News" class="headers">NEWS</router-link>
      <router-link to="/Insides" class="headers">INSIDES</router-link>
      <router-link to="/Tables" class="headers">TABLES</router-link>
      <router-link to="/AboutUs" class="headers">ABOUT US</router-link>
      <nav class="lang">
        <router-link to="#"><img class="flagsc" src="../../assets/images/en.png" /></router-link>
        <router-link to="#"><img class="flagsc" src="../../assets/images/ua.png" /></router-link>
        <router-link to="/"><img class="flagsc" src="../../assets/images/ru.png" /></router-link>
      </nav>
      <nav class="signin-form">
        <i class="fas fa-user-circle"></i>
        <router-link to="/" class="headers" id="sign_in">SIGN IN</router-link>
      </nav>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
@import "../../scss/styles";

.flagsc{
  width: 32px;
  height: 16px;
}
</style>
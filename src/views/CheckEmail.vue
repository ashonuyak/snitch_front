<template>
  <div class="wrapper">
    <header>
      <img src="../assets/images/logo.png" id="logo" />
      <nav class="question">
        <p>Back to</p>
        <router-link to="/"> Sign in </router-link>
      </nav>
    </header>
    <div class="div-index">
      <form class="form-index">
        <nav class="nav-index">
          <h1>You are almost ready to go!</h1>

          <p>Please check your email to reset your password</p>
          <img src="" />
        </nav>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../scss/stylesSign";
</style>

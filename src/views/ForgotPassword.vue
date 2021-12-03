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
          <h1>Enter your e-mail to reset your password</h1>

          <nav class="input-index">
            <input type="text" placeholder="Email" />
          </nav>
          <nav class="button">
            <button class="sign-in">Send</button>
          </nav>
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

<template>
  <div class="wrapper">
    <header>
      <img src="../assets/images/logo.png" id="logo" />
      <nav class="question">
        <p>Do not have an account?</p>
        <router-link to="/SignUp"> Sign up </router-link>
      </nav>
    </header>
    <div class="div-index">
      <form class="form-index">
        <nav class="nav-index">
          <h1>Reset your password</h1>

          <nav class="input-index">
            <input type="text" placeholder="New password" />
            <input type="text" placeholder="Confirm password" />
          </nav>
          <nav class="button">
            <button class="sign-in">Reset</button>
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

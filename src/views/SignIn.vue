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
          <h1>Sign in</h1>

          <nav class="input-index">
            <input type="text" placeholder="Email" v-model="data.email" />
            <input type="text" placeholder="Password" v-model="data.password" />
          </nav>
          <div class="error" v-if="error">Incorrect password or email</div>
          <nav class="button">
            <router-link to="/ForgotPassword" class="link-form"
              >Forgot password?</router-link
            >
            <button class="sign-in" @click="submit">Sign in</button>
          </nav>
        </nav>
      </form>
    </div>
  </div>
</template>

<script>
import apiService from "../api/api";
import router from "../router/index";
export default {
  name: "SignIn",
  data() {
    return {
      data: {
        email: "",
        password: "",
      },
      error: false,
    };
  },
  methods: {
    async submit() {
      let dataJSON = JSON.stringify(this.data);
      apiService
        .post("signIn", dataJSON)
        .then(() => {
          return router.push("/News");
        })
        .catch(() => {
          this.error = true;
        });
        console.log(dataJSON);
    },
  },
  // localStorage.setItem("accessToken", res.data.tokens.accessToken);
  // localStorage.setItem("refreshToken", res.data.tokens.refreshToken);
};
</script>

<style lang="scss" scoped>
@import "../scss/stylesSign";
.error{
  color: red;
}
</style>

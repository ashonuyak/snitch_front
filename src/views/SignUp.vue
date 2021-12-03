<template>
  <div class="wrapper">
    <header>
      <img src="../assets/images/logo.png" id="logo" />
      <nav class="question">
        <p>Already have an account?</p>
        <router-link to="/"> Log in </router-link>
      </nav>
    </header>
    <div class="div-index">
      <form class="form-index">
        <nav class="nav-index">
          <h1>Sign up</h1>

          <nav class="input-index">
            <nav class="fnln">
              <input
                type="text"
                placeholder="First name"
                id="firstname"
                v-model="firstname"
              />
              <input
                type="text"
                placeholder="Last name"
                id="lastname"
                v-model="lastname"
              />
            </nav>
            <nav class="errors">
              <div class="error">{{ fnameError }}</div>
              <div class="error">{{ lnameError }}</div>
            </nav>
            <input
              type="text"
              placeholder="Username"
              id="username"
              v-model="username"
            />
            <div class="error">{{ loginError }}</div>
            <input
              type="text"
              placeholder="E-mail"
              id="email"
              v-model="email"
              @input="button"
            />
            <div class="error">{{ emailError }}</div>
          </nav>
          <nav class="button">
            <button class="sign-in" id="btnsignin" @click="submit" disabled>
              Get started
            </button>
          </nav>
        </nav>
      </form>
    </div>
  </div>
</template>

<script>
import router from "../router/index";
import api from "../api/api";
import * as yup from "yup";
import { useField } from "vee-validate";
export default {
  name: "SignUp",
  data() {
    const { errorMessage: fnameError, value: firstname } = useField(
      "fieldName",
      yup.string().required().min(3).max(20)
    );
    const { errorMessage: lnameError, value: lastname } = useField(
      "fieldName",
      yup.string().required().min(3).max(20)
    );
    const { errorMessage: loginError, value: username } = useField(
      "fieldName",
      yup.string().required().min(8).max(20)
    );
    const { errorMessage: emailError, value: email } = useField(
      "fieldName",
      yup.string().required().min(3).email()
    );
    return {
      lastname,
      username,
      email,
      firstname,
      fnameError,
      lnameError,
      loginError,
      emailError,
    };
  },
  methods: {
    async submit() {
      const data = {email:this.email}
      const emailJSON = JSON.stringify(data) // {"email":"wqeqwejoi"}
      console.log(emailJSON);
      const res = await api.getWithParams(`request line for signup`); // user/${emailJSON}
      if (!res.data.email) {
        const data = {};
        data.firstname = this.firstname;
        data.lastname = this.lastname;
        data.username = this.username;
        data.email = this.email;
        console.log(data);
        localStorage.setItem("data", JSON.stringify(data));
        router.push("/CreatePassword");
      } else {
        alert("User with the same email already exists");
      }
    },
    button() {
      if (
        this.fnameError === undefined &&
        this.lnameError === undefined &&
        this.emailError === undefined &&
        this.loginError === undefined
      ) {
        const but = document.querySelector("#btnsignin");
        but.removeAttribute("disabled");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/stylesSign";
.error{
  color: red;
}
.errors{
  display: flex;
  flex-direction: row;
}
</style>

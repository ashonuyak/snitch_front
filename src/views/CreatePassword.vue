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
          <h1>Complete your account</h1>

          <nav class="input-index">
            <input
              type="text"
              placeholder="Create a password"
              @input="pass"
              v-model="password"
            />
            <div class="error">{{ newpasswordError }}</div>
            <input
              type="text"
              placeholder="Confirm password"
              v-model="passwordConfirm"
            />
            <div class="error" v-if="error">Passwords must match</div>
          </nav>
          <nav class="agree1">
            <CheckBox id="checkbox1" v-model="checkbox1" />
            <label for="checkbox1">I agree to the myFixer.com</label>
            <router-link to="">Terms of service</router-link>
          </nav>
          <nav class="agree2">
            <CheckBox id="checkbox2" v-model="checkbox2" @click="button" />
            <label for="checkbox2">I agree to the myFixer.com</label>
            <router-link to="">Privacy Policy</router-link>
          </nav>
          <div class="errorCheck" v-if="errorcheckbox">Accept the Terms</div>
          <nav class="button">
            <button type="button" class="sign-in" @click="submit" disabled>
              Done!
            </button>
          </nav>
        </nav>
      </form>
    </div>
  </div>
</template>

<script>
import CheckBox from "../components/controllers/CheckBox.vue";
import apiService from "../api/api";
import router from "../router/index";
import { useField } from "vee-validate";
import * as yup from "yup";
export default {
  name: "CreatePassword",
  components: {
    CheckBox,
  },
  methods: {
    async submit() {
      if (this.password !== this.passwordConfirm) {
        return (this.error = true);
      }
      if (!this.checkbox1 || !this.checkbox2) {
        return (this.errorcheckbox = true);
      }
      if (
        this.password === this.passwordConfirm &&
        this.checkbox1 &&
        this.checkbox2
      ) {
        let data = JSON.parse(localStorage.getItem("data"));
        data.password = this.password;
        console.log(data);
        let dataJSON = JSON.stringify(data)
        console.log(dataJSON)
        apiService.post("user/create", dataJSON).then(() => {
          localStorage.removeItem("data");
          router.push("/News");
        });
        // router.push("/News");
        return;
      }
      console.log("here");
    },
    button() {
      const but = document.querySelector(".sign-in");
      but.removeAttribute("disabled");
    },
  },
  data() {
    const { errorMessage: newpasswordError, value: password } = useField(
      "fieldName",
      yup.string().required().min(6).max(20)
    );
    return {
      checkbox1: false,
      checkbox2: false,
      passwordConfirm: "",
      password,
      newpasswordError,
      error: false,
      errorcheckbox: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/stylesSign";
</style>

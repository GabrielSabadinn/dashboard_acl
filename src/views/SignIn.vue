<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar
          is-blur="blur blur-rounded my-3 py-2 start-0 end-0 mx-4 shadow"
          btn-background="bg-gradient-success"
          :dark-mode="true"
        />
      </div>
    </div>
  </div>
  <main class="mt-0 main-content main-content-bg">
    <section>
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-6 d-flex flex-column">
              <div class="mt-8 card card-plain">
                <div class="pb-0 card-header text-start">
                  <h3 class="font-weight-bolder text-info text-gradient">
                    Bem vindo de volta
                  </h3>
                  <p class="mb-0">Digite seu e-mail e senha para entrar</p>
                </div>
                <div class="card-body">
                  <form role="form" class="text-start" @submit.prevent="login">
                    <label>Email</label>
                    <vsud-input
                      :value="email"
                      @input="updateEmail"
                      type="email"
                      placeholder="Email"
                      name="email"
                    />
                    <label>Senha</label>
                    <vsud-input
                      :value="password"
                      @input="updatePassword"
                      type="password"
                      placeholder="Senha"
                      name="password"
                    />
                    <p v-if="errorMessages.Email" class="text-danger">
                      {{ errorMessages.Email[0] }}
                    </p>
                    <p v-if="errorMessages.Password" class="text-danger">
                      {{ errorMessages.Password[0] }}
                    </p>
                    <p v-if="loginError" class="text-danger">{{ loginError }}</p>

                    <div class="text-center">
                      <vsud-button
                        class="my-4 mb-2"
                        variant="gradient"
                        color="info"
                        full-width
                        >Entrar</vsud-button
                      >
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="top-0 oblique position-absolute h-100 d-md-block d-none me-n8">
                <div
                  class="bg-cover oblique-image position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                  :style="{
                    backgroundImage: `url(${bgImg})`,
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <app-footer />
</template>

<script>
import axios from "axios";
import VsudInput from "@/components/VsudInput.vue";
import VsudSwitch from "@/components/VsudSwitch.vue";
import VsudButton from "@/components/VsudButton.vue";
import bgImg from "@/assets/img/curved-images/curved9.jpg";
const body = document.getElementsByTagName("body")[0];
import { setToken } from "../utils/cookie.js";
export default {
  name: "SigninPage",
  components: {
    VsudInput,
    VsudSwitch,
    VsudButton,
  },
  data() {
    return {
      email: "",
      password: "",
      bgImg,
      errorMessages: {},
      loginError: "",
    };
  },
  methods: {
    updateEmail(event) {
      this.email = event.target.value;
    },
    updatePassword(event) {
      this.password = event.target.value;
    },
    async login() {
      this.errorMessages = {};
      this.loginError = "";

      if (!this.email || !this.password) {
        if (!this.email) {
          this.errorMessages.Email = ["O campo Email é obrigatório."];
        }
        if (!this.password) {
          this.errorMessages.Password = ["O campo Senha é obrigatório."];
        }
        return;
      }

      const formData = new FormData();
      formData.append("Email", this.email);
      formData.append("Password", this.password);

      try {
        const response = await axios.post(
          "https://api.cursoslefisc.com.br/acl/authentication/login",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.data.acessToken) {
          setToken("accessToken", response.data.acessToken);
          this.$router.push("/dashboard");
        } else {
          this.loginError = "Email ou senha incorretos";
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.loginError = "Email ou senha incorretos";
        } else if (error.response && error.response.data && error.response.data.errors) {
          this.errorMessages = error.response.data.errors;
        } else {
          console.error("Login error:", error);
        }
      }
    },
  },

  beforeMount() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
};
</script>

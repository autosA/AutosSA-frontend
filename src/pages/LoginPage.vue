<template>
  <div
    class="container-fluid vh-100 d-flex justify-content-center align-items-center bg-dark"
  >
    <div class="card p-4 shadow-lg" id="card">
      <div class="row align-items-center">
        <div class="col-md-6 mb-3 mb-md-0">
          <h3 class="text-center text-white mb-4">Inicio de Sesión</h3>
          <form @submit.prevent="login">
            <div class="mb-3">
              <label for="username" class="form-label text-sm text-white"
                >Nombre de usuario</label
              >
              <input
                type="text"
                id="username"
                v-model="username"
                required
                class="form-control"
                placeholder="Ingrese el nombre de usuario"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label text-sm text-white"
                >Contraseña</label
              >
              <input
                type="password"
                id="password"
                v-model="password"
                required
                class="form-control"
                placeholder="Ingrese la contraseña"
              />
            </div>
            <div v-if="error" class="text-danger mt-3">{{ error }}</div>
            <div class="d-grid mt-4">
              <button @click="login" class="btn btn-primary fw-bold">
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
        <div class="col-md-6 d-none d-md-block">
          <img :src="loginImage" alt="Login Image" class="img-fluid rounded" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getClientes } from "@/services/service.js";

export default {
  data() {
    return {
      username: "",
      password: "",
      error: "",
      loginImage: require("../assets/css/autos/bandera-de-carreras.png"),
    };
  },
  methods: {
    async login() {
      try {
        const users = await getClientes();
        const user = users.find(
          (user) => user.name === this.username && user.password === this.password
        );
        if (user) {
          sessionStorage.setItem("userId", user.id);
          this.$router.push("/");
        } else {
          this.error = "Nombre de usuario o contraseña incorrectos";
        }
      } catch (error) {
        this.error = "Error al cargar los datos de usuario";
      }
    },
  },
};
</script>

<style scoped>
body {
  background-color: #121212;
  color: #ffffff;
}

#card {
  background-color: #1e1e1e;
  border-radius: 15px;
  padding: 20px;
  max-width: 800px;
  width: 100%;
  margin: auto;
}

.form-control {
  background-color: #2c2c2c;
  color: white;
  border: 1px solid #444;
}

.btn-primary {
  background-color: #007bff;
  border: none;
}

.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
}
</style>

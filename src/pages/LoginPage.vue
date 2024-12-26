<template>
  <div class="container-fluid vh-100 d-flex justify-content-center align-items-center bg-dark">
    <div class="card p-4 shadow-lg" id="login-card">
      <div class="row align-items-center">
        <div class="col-md-6 mb-3 mb-md-0">
          <h3 class="text-center text-light mb-4">Inicio de Sesión</h3>
          <form @submit.prevent="login">
            <div class="mb-3">
              <label for="username" class="form-label text-white fw-bold">Nombre de Usuario</label>
              <input
                type="text"
                id="username"
                v-model="username"
                required
                class="form-control"
                placeholder="Ingrese su nombre de usuario"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label text-white fw-bold">Contraseña</label>
              <input
                type="password"
                id="password"
                v-model="password"
                required
                class="form-control"
                placeholder="Ingrese su contraseña"
              />
            </div>
            <div v-if="error" class="text-danger text-center mt-3">{{ error }}</div>
            <div class="d-grid mt-4">
              <button type="submit" class="btn btn-primary fw-bold">Iniciar Sesión</button>
            </div>
          </form>
          <div class="text-center mt-3">
            <button @click="goToRegister" class="btn btn-link text-light">¿No tienes cuenta? Regístrate</button>
          </div>
        </div>
        <div class="col-md-6 d-none d-md-block text-center">
          <img :src="loginImage" alt="Imagen de Login" class="img-fluid rounded shadow" />
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
      if (!this.username || !this.password) {
        this.error = "Por favor, ingrese el nombre de usuario y la contraseña.";
        return;
      }

      try {
        const users = await getClientes();
        const user = users.find(
          (user) => user.username === this.username && user.password === this.password
        );
        
        if (user) {
          sessionStorage.setItem("userId", user.id);
          this.$router.push("/");
        } else {
          this.error = "Nombre de usuario o contraseña incorrectos.";
        }
      } catch (error) {
        this.error = "Error al cargar los datos de usuario.";
      }
    },
    goToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
body {
  background-color: #121212;
  color: #ffffff;
}

#login-card {
  background-color: #1e1e1e;
  border-radius: 15px;
  max-width: 900px;
  width: 100%;
  padding: 30px;
}

.form-control {
  color: white;
  border: 1px solid #444;
  font-size: 1rem;
  padding: 10px;
}

.form-label {
  font-size: 1.1rem;
}

.btn-primary {
  background-color: #007bff;
  border: none;
  padding: 10px 15px;
  font-size: 1.1rem;
}

.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.25);
}

.img-fluid {
  max-height: 300px;
  object-fit: contain;
}

.btn-link {
  background: none;
  border: none;
  padding: 0;
  font-size: 1rem;
  text-decoration: underline;
  cursor: pointer;
}

.btn-link:hover {
  color: #007bff;
}
</style>

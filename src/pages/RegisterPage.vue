<template>
  <div class="container vh-100 d-flex justify-content-center align-items-center ">
    <div class="card p-5 shadow-sm" id="register-card">
      <h3 class="text-center mb-4 fw-bold text-light">Registro de Cliente</h3>
      <form @submit.prevent="register">
        <div class="row g-3">
          <div class="col-md-6">
            <label for="name" class="form-label">Nombre Completo</label>
            <input
              type="text"
              id="name"
              v-model="cliente.name"
              class="form-control"
              placeholder="Ingrese su nombre completo"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="username" class="form-label">Nombre de Usuario</label>
            <input
              type="text"
              id="username"
              v-model="cliente.username"
              class="form-control"
              placeholder="Ingrese un nombre de usuario"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="password" class="form-label">Contraseña</label>
            <input
              type="password"
              id="password"
              v-model="cliente.password"
              class="form-control"
              placeholder="Ingrese una contraseña"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="email" class="form-label">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              v-model="cliente.email"
              class="form-control"
              placeholder="Ingrese su correo electrónico"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="telephone" class="form-label">Teléfono</label>
            <input
              type="text"
              id="telephone"
              v-model="cliente.telephone"
              class="form-control"
              placeholder="Ingrese su número de teléfono"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="city" class="form-label">Ciudad</label>
            <input
              type="text"
              id="city"
              v-model="cliente.city"
              class="form-control"
              placeholder="Ingrese su ciudad"
              required
            />
          </div>
          <div class="col-md-12">
            <label for="address" class="form-label">Dirección</label>
            <input
              type="text"
              id="address"
              v-model="cliente.address"
              class="form-control"
              placeholder="Ingrese su dirección"
              required
            />
          </div>
          <div class="col-md-12">
            <label for="companyName" class="form-label">Nombre de la Compañía</label>
            <input
              type="text"
              id="companyName"
              v-model="cliente.companyName"
              class="form-control"
              placeholder="Opcional"
            />
          </div>
        </div>
        <div v-if="error" class="text-danger text-center mt-3">{{ error }}</div>
        <div v-if="success" class="text-success text-center mt-3">{{ success }}</div>
        <div class="d-grid mt-4">
          <button type="submit" class="btn btn-lg custom-btn">Registrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { createCliente } from "@/services/service.js";

export default {
  data() {
    return {
      cliente: {
        name: "",
        username: "",
        password: "",
        email: "",
        telephone: "",
        companyName: "",
        city: "",
        address: "",
      },
      error: "",
      success: "",
    };
  },
  methods: {
    async register() {
      try {
        await createCliente(this.cliente);
        this.success = "Cliente registrado exitosamente";
        this.error = "";
        this.resetForm();
        this.$router.push("/");
      } catch (error) {
        this.error = "Error al registrar el cliente";
        this.success = "";
      }
    },
    resetForm() {
      this.cliente = {
        name: "",
        username: "",
        password: "",
        email: "",
        telephone: "",
        companyName: "",
        city: "",
        address: "",
      };
    },
  },
};
</script>


<style scoped>
body {
  background-color: #121212;
  color: #ffffff;
}

#register-card {
  background-color: #1e1e1e;
  border-radius: 12px;
  max-width: 700px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

h3 {
  color: #ffffff;
}

.form-label {
  font-size: 0.9rem;
  font-weight: bold;
  color: #b0b0b0;
}


.custom-btn {
  background-color: #4c6baf;
  color: #ffffff;
  border: none;
  border-radius: 8px;
}


</style>

<template>
  <div class="bg-dark text-light min-vh-100">
    <AutoNavBarLogAdmin />
    <div class="container py-5">
      <div class="row text-center">
        <!-- Contenedor de opciones -->
        <div class="col-md-3 rounded-4" id="container1">
          <img src="" id="img-setting" class="img-fluid" />
          <router-link
            to="/perfilAdmin"
            class="btn fw-bold text-light rounded-4 btn-option"
          >
            Perfil administrador
          </router-link>
          <br /><br />
          <router-link
            to="/publicacionAdmin"
            class="btn fw-bold text-light rounded-4 btn-option"
          >
            Tus publicaciones
          </router-link>
          <br /><br />
          <router-link
            to="/gestionAdmin"
            class="btn fw-bold text-light rounded-4 btn-option"
          >
            Gestión clientes
          </router-link>
          <br /><br />
          <router-link to="/comprasClientes" class="btn fw-bold text-light rounded-4 btn-option">
            Compras clientes
          </router-link>
          <br /><br />
          <router-link to="#" class="btn fw-bold text-light rounded-4 btn-option">
            Opción 3
          </router-link>
        </div>

        <!-- Contenedor perfil -->
        <div class="col rounded-4 fw-bold" id="container2">
          <div class="row">
            <div class="col text-center">
              <div id="tittle">
                <p>Tu perfil</p>
              </div>
            </div>
          </div>

          <!-- Datos -->
          <div class="profile-container">
            <!-- Imagen -->
            <div class="text-center mb-4">
              <img
                src="../assets/css/usuarios/avatar.png"
                class="img-fluid img-avatar me-2"
                alt="Avatar del cliente"
              />
            </div>

            <!-- Información del administrador -->
            <div class="profile-details">
              <div class="mb-3">
                <label class="fw-bold">Nombre:</label>
                <span>{{ admins.name }}</span>
              </div>

              <div class="mb-3">
                <label class="fw-bold">Nombre de usuario:</label>
                <span>{{ admins.username }}</span>
              </div>

              <div class="mb-3">
                <label class="fw-bold">Contraseña:</label>
                <span v-if="showPassword">{{ admins.password }}</span>
                <span v-else>••••••••</span>
                <button class="btn btn-sm btn-secondary ms-2" @click="togglePassword">
                  {{ showPassword ? "Ocultar" : "Mostrar" }}
                </button>
              </div>

              <div class="mb-3">
                <label class="fw-bold">Correo electrónico:</label>
                <span>{{ admins.email }}</span>
              </div>
            </div>

            <!-- Botón actualizar -->
            <div class="text-center mt-4">
              <button class="btn btn-primary">Actualizar datos</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import AutoNavBarLogAdmin from "@/components/AutoNavBarLogAdmin.vue";
import Footer from "@/components/Footer.vue";
import { getAdminById } from "@/services/service";
import { ref, onMounted } from "vue";

const admins = ref({});
const showPassword = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

onMounted(async () => {
  try {
    admins.value = await getAdminById(sessionStorage.adminId);
  } catch (error) {
    console.error("Error al obtener los datos del administrador", error);
    alert("Ocurrió un error al obtener los datos del administrador");
  }
});
</script>

<style scoped>
#container1 {
  background-color: #1e1e1e;
  padding: 50px;
  margin: 10px;
  height: 100%;
  min-height: 500px;
}

#container2 {
  background-color: #1e1e1e;
  padding: 50px;
  margin: 10px;
  flex-grow: 1;
  height: 100%;
  min-height: 500px;
}

#tittle {
  border-radius: 25px;
  max-width: 20%;
  position: relative;
  left: 40%;
}

.btn-option {
  width: 200px;
  margin: 10px;
}

.btn-option:hover {
  color: #0d6efd !important;
}

.img-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-details {
  width: 100%;
  max-width: 500px;
  background-color: #2c2c2c;
  padding: 20px;
  border-radius: 10px;
}

.profile-details div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

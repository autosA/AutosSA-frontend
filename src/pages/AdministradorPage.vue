<template>
  <div class="bg-dark text-light min-vh-100">
    <NavBar />
    <div class="container py-5">
      <div class="row text-center">
        <!-- Contenedor de opciones -->
        <div class="col-md-3 rounded-4" id="container">
          <img src="" id="img-setting" class="img-fluid" />
          <router-link to="/perfilAdmin" class="btn fw-bold text-light rounded-4 btn-option">
            Tu perfil
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
            Gestión Usuario
          </router-link>
          <br /><br />
          <router-link to="/opcion2" class="btn fw-bold text-light rounded-4 btn-option">
            Opción 2
          </router-link>
          <br /><br />
          <router-link to="/opcion3" class="btn fw-bold text-light rounded-4 btn-option">
            Opción 3
          </router-link>
        </div>
        <!-- Contenedor de gestión -->
        <div class="col rounded-4 fw-bold" id="container">
          <div id="title">
            <p>Gestión usuarios</p>
          </div>
          <div class="row">
            <div
              v-for="cliente in clientes"
              :key="cliente.id"
              class="col-sm-4 position-relative"
            >
              <div class="cliente-card">
                <img
                  src="../assets/css/usuarios/avatar.png"
                  class="cliente-image"
                  @click="showDeleteConfirmation(cliente.id, $event)"
                  alt="Avatar del cliente"
                />
                <p>{{ cliente.name }}</p>
              </div>
            </div>
          </div>
          <!-- Ventana eliminar usuario -->
          <div
            v-if="showPopover"
            class="shadow-lg popover"
            id="windows"
            role="dialog"
            :style="popoverStyles"
          >
            <div class="text-white p-2 primary-bg-custom rounded-3">
              <p class="text-center fw-semibold fs-6">¿Eliminar usuario?</p>
              <p class="text-center">
                <button
                  @click="deleteCliente"
                  id="boton-usuario-popover"
                  class="btn btn-danger fw-bold rounded-5 btn-m"
                >
                  Eliminar
                </button>
                <button
                  @click="() => (showPopover = false)"
                  id="boton-usuario-cancelar"
                  class="btn fw-bold rounded-5 btn-light btn-m"
                >
                  Cancelar
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from "@/components/AutoNavBarLog.vue";
import Footer from "@/components/Footer.vue";
import { deleteClienteById, getClientes } from "@/services/service";
import { ref, onMounted } from "vue";

const showPopover = ref(false);
const clientes = ref([]);
const selectedClienteId = ref(null);
const popoverStyles = ref({});

onMounted(async () => {
  try {
    clientes.value = await getClientes();
  } catch (error) {
    console.error("Error al obtener los datos de los usuarios", error);
    alert("Ocurrió un error al obtener los datos de los usuarios");
  }
});

const showDeleteConfirmation = (clienteId, event) => {
  selectedClienteId.value = clienteId;
  const rect = event.target.getBoundingClientRect();
  popoverStyles.value = {
    top: `${rect.top + window.scrollY}px`,
    left: `${rect.right + window.scrollX + 10}px`,
  };
  showPopover.value = true;
};

const deleteCliente = async () => {
  if (!selectedClienteId.value) {
    alert("Usuario no válido.");
    return;
  }

  try {
    await deleteClienteById(selectedClienteId.value);
    clientes.value = clientes.value.filter(
      (cliente) => cliente.id !== selectedClienteId.value
    );
    showPopover.value = false;
  } catch (error) {
    console.error("Error al eliminar el usuario", error);
    alert("No se pudo eliminar el usuario. Intenta nuevamente.");
  }
};
</script>

<style scoped>
#container {
  background-color: #1e1e1e;
    padding: 50px;
    margin: 10px;
}

#windows {
    background-color: rgb(0, 0, 0);
    border-radius: 15px;
    position: absolute;
    z-index: 1000;
}

#boton-usuario-popover,
#boton-usuario-cancelar {
    width: 150px;
    height: 40px;
    margin: 5px;
}

#title {
    border-radius: 25px;
    max-width: 20%;
    position: relative;
    left: 40%;
}

.btn-option {
    width: 200px;
    margin: 10px;
}

.btn-option:hover{
  color: #0d6efd !important;
}

#img-setting {
    width: 100%;
    position: relative;
    left: -1rex;
    margin-bottom: 50px;
}

.option {
    background-color: #f0f0f0;
    padding: 10px;
    margin-bottom: 10px;
}

.cliente-card {
    margin-bottom: 20px;
}

.cliente-image {
    width: 100%;
    cursor: pointer;
}

.cliente-card {
    margin-bottom: 50px;
    margin-top: 10px;
    width: 150px;
    position: relative;
    left: 5rem;
}
</style>

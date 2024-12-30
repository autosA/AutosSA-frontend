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
          <router-link to="/compras" class="btn fw-bold text-light rounded-4 btn-option">
            Compras clientes
          </router-link>
          <br /><br />
          <router-link to="#" class="btn fw-bold text-light rounded-4 btn-option">
            Opción 3
          </router-link>
        </div>

        <!-- Contenedor publicaciones -->

        <div class="col rounded-4 fw-bold" id="container2">
          <div class="row">
            <div class="col text-center">
              <div id="tittle">
                <p>Tus publicaciones</p>
              </div>
            </div>
          </div>

          <!-- Mostrar cartas de autos -->
          <div class="row" id="cards">
            <div v-for="auto in autos" :key="auto.id" class="col-12 col-sm-6 col-md-4 ">
            
              <img :src="auto.img" class="card-img-top" alt="Imagen del auto" />
              <div class="card text-light ">
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title">{{ auto.brand }} {{ auto.model }}</h5>
                  <p class="card-text">Categoria: {{ auto.category }}</p>
                  <p class="card-text">Precio: ${{ auto.price }}</p>
                  <p class="card-text">Año: {{ auto.year }}</p>
                  <p class="card-text">Descripción: {{ auto.description }}</p>
                  <p class="card-text mt-auto">
                    Disponible:
                    <span :class="auto.available ? 'text-success' : 'text-danger'">
                      {{ auto.available ? "Sí" : "No" }}
                    </span>
                  </p>
                </div>
              </div>
              <button
                @click="showDeleteConfirmation(auto.id, $event)"
                class="btn btn-danger"
              >
                Eliminar publicación
              </button>
            </div>

            <!-- Popover para confirmación -->
            <div
              v-if="showPopover"
              :style="popoverStyles"
              id="windows"
              class="shadow-lg popover"
            >
              <div class="text-white p-2 primary-bg-custom rounded-3">
                <p class="text-center fw-semibold fs-6">¿Eliminar publicacion?</p>
                <p class="text-center">
                  <button
                    @click="deleteAuto"
                    id="boton-auto-eliminar"
                    class="btn btn-danger fw-bold rounded-5 btn-m"
                  >
                    Eliminar
                  </button>
                  <button
                    @click="showPopover = false"
                    id="boton-auto-cancelar"
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
    </div>
    <Footer />
  </div>
</template>

<script setup>
import AutoNavBarLogAdmin from "@/components/AutoNavBarLogAdmin.vue";
import Footer from "@/components/Footer.vue";
import { getAutosForAdmin, deleteAutoById } from "@/services/service";
import { ref, onMounted } from "vue";

const showPopover = ref(false);
const autos = ref([]);
const selectedAutoId = ref(null);
const popoverStyles = ref({});

onMounted(async () => {
  try {
    autos.value = await getAutosForAdmin(sessionStorage.adminId);
  } catch (error) {
    console.error("Error al obtener los datos de los autos", error);
    alert("Ocurrió un error al obtener los datos de los autos");
  }
});

const showDeleteConfirmation = (autoId, event) => {
  selectedAutoId.value = autoId;
  const rect = event.target.getBoundingClientRect();
  popoverStyles.value = {
    top: `${rect.top + window.scrollY}px`,
    left: `${rect.right + window.scrollX + 10}px`,
  };
  showPopover.value = true;
};

const deleteAuto = async () => {
  try {
    await deleteAutoById(selectedAutoId.value);
    autos.value = autos.value.filter((auto) => auto.id !== selectedAutoId.value);
    showPopover.value = false;
  } catch (error) {
    console.error("Error al eliminar el auto", error);
    alert("Ocurrió un error al eliminar el auto");
  }
};
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

#windows {
  background-color: rgb(0, 0, 0);
  border-radius: 15px;
  position: absolute;
  z-index: 1000;
}

#boton-auto-eliminar,
#boton-auto-cancelar {
  width: 150px;
  height: 40px;
  margin: 5px;
}
.card-img-top {
  height: 150px;
  object-fit: cover;
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

#cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  background-color: #1c1c1c;
}
.btn{
  margin-bottom: 10px;
}
</style>

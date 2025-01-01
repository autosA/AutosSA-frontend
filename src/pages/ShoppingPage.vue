<template>
  <div class="bg-dark text-light min-vh-100">
    <Navbar />
    <div class="container py-5">
      <!-- Autos seleccionado -->
      <div class="col-md-3 rounded-4" id="container1">
        <div>
          <div v-if="loading" class="text-center">Cargando autos...</div>
          <div v-else>
            <h4>marca: {{ autos.brand }}</h4>
            <h4>modelo: {{ autos.model }}</h4>
            <img :src="autos.img" class="card-img-top" alt="Imagen del auto" />
            <h1>Precio: {{ autos.price }}</h1>
          </div>
        </div>
      </div>
      <!--mas ofertas-->
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "@/components/AutoNavBarLog.vue";
import Footer from "@/components/Footer.vue";
import { getAutoById } from "@/services/service";
import { ref, onMounted } from "vue";

const autos = ref({});

onMounted(async () => {
  try {
    autos.value = await getAutoById(4);
  } catch (error) {
    console.error("Error al obtener los datos del auto", error);
    alert("Ocurrió un error al obtener los datos del auto");
  }
});
</script>

<style scoped>
.bg-dark {
  background-color: #121212 !important;
}

.img-fluid {
  max-height: 400px;
  object-fit: cover;
  width: 50%;
}

.lead {
  font-size: 1.25rem;
  line-height: 1.8;
}

.card {
  background-color: #1c1c1c;
  color: #f5f5f5;
  border-radius: 12px;
  overflow: hidden;
}

.card-img-top {
  height: 150px;
  object-fit: cover;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.card-text {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.text-success {
  color: #28a745 !important;
}

.text-danger {
  color: #dc3545 !important;
}
</style>

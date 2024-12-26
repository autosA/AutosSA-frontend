<template>
  <div>
    <Navbar />
    <div class="container">
      <h1 class=" text-center my-4">Lista de Autos</h1>
      <div v-if="loading" class="text-center">Cargando autos...</div>
      <div v-else>
        <div class="row">
          <div v-for="auto in autos" :key="auto.id" class="col-md-4 mb-4">
            <div class="card">
              <img :src="auto.imageUrl" class="card-img-top" alt="Imagen del auto">
              <div class="card-body">
                <h5 class="card-title">{{ auto.brand }} {{ auto.model }}</h5>
                <p class="card-text">Precio: {{ auto.price }}</p>
                <p class="card-text">Año: {{ auto.year }}</p>
                <p class="card-text">Descripción: {{ auto.description }}</p>
                <p class="card-text">Disponible: {{ auto.available ? "Sí" : "No" }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/AutoNavBar.vue";
import Footer from "@/components/Footer.vue"
import { getAutosForCliente } from "@/services/service";

export default {
  name: "HomePage",
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      autos: [],
      loading: true
    };
  },
  async created() {
    try {
      const autos = await getAutosForCliente();
      this.autos = autos;
    } catch (error) {
      console.error("Error al obtener los datos de los autos", error);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.auto-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px 0;
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>

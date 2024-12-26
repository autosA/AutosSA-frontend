<template>
  <div class="bg-dark text-light min-vh-100">
    <Navbar />
    <div class="container py-5">
      <h1 class="text-center mb-5">Lista de Autos</h1>
      <div v-if="loading" class="text-center">Cargando autos...</div>
      <div v-else>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div v-for="auto in autos" :key="auto.id" class="col">
            <div class="card bg-secondary text-light shadow border-0 h-100">
              <img :src="auto.imageUrl" class="card-img-top" alt="Imagen del auto">
              <div class="card-body">
                <h5 class="card-title">{{ auto.brand }} {{ auto.model }}</h5>
                <p class="card-text">Precio: ${{ auto.price }}</p>
                <p class="card-text">Año: {{ auto.year }}</p>
                <p class="card-text">Descripción: {{ auto.description }}</p>
                <p class="card-text">
                  Disponible: 
                  <span :class="auto.available ? 'text-success' : 'text-danger'">
                    {{ auto.available ? "Sí" : "No" }}
                  </span>
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

<script>
import Navbar from "@/components/AutoNavBar.vue";
import Footer from "@/components/Footer.vue";
import { getAutosForCliente } from "@/services/service";

export default {
  name: "HomePage",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      autos: [],
      loading: true,
    };
  },
  async created() {
    try {
      const placeholderImages = [
        "https://cdn.motor1.com/images/mgl/7ZL9x1/s1/toyota-corolla-2022-0.webp",
        "https://storage.googleapis.com/foto_autosusados/automotoras/sinwm/908/01011193860-1-2-3.jpg",
        "https://tuningchile.cl/cdn/shop/files/Camaro_chev_1_93c34f6a-64d2-4e5f-b0ce-1c908a12346d_800x.jpg?v=1733900524",
        "https://www.elcarrocolombiano.com/wp-content/webp-express/webp-images/uploads/2021/10/20211012-MAZDA-MX-5-RF-2022-PRUEBA-DE-MANEJO-TEST-DRIVE-COMENTARIOS-VIDEO-COLOMBIA-01.jpg.webp",
        "https://cdn.pixabay.com/photo/2014/05/02/21/50/car-336606_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/03/09/09/11/car-1245717_1280.jpg",
      ];
      const autos = await getAutosForCliente();
      this.autos = autos.map((auto, index) => ({
        ...auto,
        imageUrl: auto.imageUrl || placeholderImages[index % placeholderImages.length],
      }));
    } catch (error) {
      console.error("Error al obtener los datos de los autos", error);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.bg-dark {
  background-color: #121212 !important;
}

.card {
  background-color: #1c1c1c;
  color: #f5f5f5;
  border-radius: 12px;
  overflow: hidden;
}

.card-img-top {
  height: 200px;
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

.row-cols-1 {
  gap: 20px;
}

.container {
  max-width: 1200px;
}
</style>

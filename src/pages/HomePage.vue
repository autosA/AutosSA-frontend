<template>
  <div class="bg-dark text-light min-vh-100">
    <Navbar />
    <div class="container py-5">
      <!--Descripcion y presentacion-->
      <div class="presentation mb-5">
        <h1 class="text-center mb-5">Bienvenidos a AutoMarket</h1>
        <div class="row align-items-center">
          <div class="col-md-6 text-center">
            <img
              :src="require('@/assets/css/autos/pexel.jpg')"
              alt="Concesionaria AutoPremium"
              class="img-fluid"
            />
          </div>
          <div class="col-md-6">
            <p class="lead">
              En AutoMarket, ofrecemos la mejor selección de autos nuevos y usados para
              que encuentres el vehículo de tus sueños. ¡Calidad y confianza garantizadas!
            </p>
          </div>
        </div>
      </div>

      <!-- Autos disponibles -->
      <div>
        <h1 class="text-center mb-5">Este mes</h1>
        <div v-if="loading" class="text-center">Cargando autos...</div>
        <div v-else>
          <div class="row g-4">
            <div
              v-for="auto in autos"
              :key="auto.id"
              class="col-12 col-sm-6 col-md-4 col-lg-3"
            >
              <div
                class="card"
              >
                <img :src="auto.img" class="card-img-top" alt="Imagen del auto" />
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
            </div>
          </div>
        </div>
      </div>
      <!--mas ofertas-->
      <div>
        <div class="img"></div>
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

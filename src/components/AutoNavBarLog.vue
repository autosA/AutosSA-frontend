<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm">
    <div class="container-fluid">
      <router-link class="navbar-brand fw-bold text-uppercase" to="/">
        AutoMarket
      </router-link>

      <div ref="popoverContainer">
        <button
          @click="togglePopover"
          class="btn user-btn d-flex align-items-center"
        >
          <img
            src="../assets/css/usuarios/avatar.png"
            class="img-fluid img-avatar me-2"
            alt="User Avatar"
          />
          <span class="user-name">{{ userData.name }}</span>
        </button>

        <div v-if="showPopover" class="popover-container">
          <div class="popover-content rounded-3">
            <p class="text-center mb-0">
              <router-link
                to="/"
                class="btn btn-danger fw-bold rounded-5 px-4 py-2"
                id="btn-option"
              >
                Cerrar Sesión
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { getClienteById } from "@/services/service.js";

const userData = ref({});
const showPopover = ref(false);
const popoverContainer = ref(null);

userData.value = await getClienteById(sessionStorage.userId);

const togglePopover = () => {
  showPopover.value = !showPopover.value;
};

const handleClickOutside = (event) => {
  if (popoverContainer.value && !popoverContainer.value.contains(event.target)) {
    showPopover.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.navbar {
  background-color: #1a1a1a;
  padding: 0.8rem 1rem;
}

.navbar-brand {
  font-size: 1.5rem;
  color: #ffffff !important;
}

.navbar-brand:hover {
  color: #0d6efd !important;
}

.user-btn {
  background-color:#1a1a1a;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 120px;
}

.user-btn:hover{
  color: #007bff !important;
}

.img-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.user-name {
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
}

.popover-container {
  position: absolute;
  top: 60px;
  right: 10px;
  z-index: 1000;
}

.popover-content {
  background-color: #2b2b2b;
  color: #f8f9fa;
  padding: 1rem;
  border: 1px solid #444;
}

.popover-content a:hover {
  background-color: #dc3545;
}
</style>

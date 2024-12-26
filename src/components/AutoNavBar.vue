<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm">
    <div class="container-fluid">
      <router-link class="navbar-brand fw-bold text-uppercase" to="/">AutoMarket</router-link>
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link active text-light px-3" to="/login">
              <i class="fas fa-sign-in-alt me-2"></i>Inicio de Sesión
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-light px-3" to="/register">
              <i class="fas fa-user-plus me-2"></i>Registro
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AutoNavbar"
};
</script>

<style scoped>
.navbar {
  background-color: #212529;
  padding: 0.8rem 1rem;
}

.navbar-brand {
  font-size: 1.5rem;
  color: #f8f9fa !important;
  transition: color 0.3s;
}

.navbar-brand:hover {
  color: #0d6efd !important;
}

.nav-link {
  font-size: 1rem;
  transition: color 0.3s, background-color 0.3s;
  border-radius: 5px;
}

.nav-link:hover {
  color: #0d6efd !important;
  background-color: #343a40;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%2868, 68, 68, 1%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.shadow-sm {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>

<template>
  <footer class="footer mt-auto py-3 bg-dark text-light">
    <div class="container text-center">
      <span class="text-muted">
        &copy; 2024 <strong>AutoMarket</strong>. Todos los derechos reservados.
      </span>
      <div class="social-icons mt-2">
        <a href="#" class="text-light mx-2"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="text-light mx-2"><i class="fab fa-twitter"></i></a>
        <a href="#" class="text-light mx-2"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AutoFooter"
};
</script>

<style scoped>
.footer {
  background-color: #212529;
  padding: 1rem 0;
  color: #adb5bd;
  font-size: 0.9rem;
}

.footer .social-icons a {
  font-size: 1.2rem;
  transition: color 0.3s;
}

.footer .social-icons a:hover {
  color: #0d6efd;
}

.footer span {
  font-size: 0.95rem;
}

.footer strong {
  color: #f8f9fa;
}

.footer {
  border-top: 1px solid #343a40;
}
</style>

<template>
  <div class="card-body mr-1 d-flex flex-column align-items-center">
    asdasd
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.card-body {
  width: 33% !important;
}
@media (max-width: 991px) {
  .card-body {
    width: 80% !important;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0;
  }
}

img {
  max-width: 80%; /* Maksymalna szerokość obrazu */
  max-height: 80%; /* Maksymalna wysokość obrazu */
  object-fit: cover; /* Zachowanie proporcji obrazu */
}
</style>

<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark p-3" aria-label="Fourth navbar example">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand">ZSTIB<span>.</span> </RouterLink>
      <button class="navbar-toggler" type="button" @click="toggleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div :class="{'collapse': !navbarOpen, 'navbar-collapse': true}" id="navbarsExample04">
        <ul class="navbar-nav ms-auto mb-2 mb-md-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/" @click.native="closeNavbar">Strona Główna</RouterLink>
          </li>
          <li class="nav-item">
            <a href="/#services" class="nav-link" @click="closeNavbar">Co oferujemy</a>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/Offer" @click.native="closeNavbar">Nasze projekty</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/aboutUs" @click.native="closeNavbar">O nas</RouterLink>
          </li>
          <li class="nav-item border ">
            <RouterLink class="nav-link last" to="/Contact" @click="openForm" @click.native="closeNavbar">Dołącz do nas</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
  
<script lang="ts" setup>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const emit = defineEmits(['openForm'])
const navbarOpen = ref(false);

const toggleNavbar = () => {
  navbarOpen.value = !navbarOpen.value;
};

const closeNavbar = () => {
  navbarOpen.value = false;
};
const openForm = ()=>{
    emit("openForm");
}
</script>
  
<style scoped>

@import url(/src/assets/colors.css);
/* Styl dla nawigacji */
.navbar {
  background-color: var(--dark) !important; /* Ustawienie koloru tła paska nawigacji */
  font-weight: bold;
  width: 100%;
  position: fixed;
  left: 0; 
  top: 0; 
  z-index: 1000;
}

/* Styl dla marki */
.navbar-brand {
  font-size: 24px;
  color: var(--white); /* Kolor tekstu marki */
  line-height: 28px;
}

.navbar-brand span {
  color: var(--primary); /* Kolor dodatkowego punktu w marki */
}

/* Styl dla linków nawigacyjnych */
.nav-link {
  position: relative;
  color: var(--white); /* Kolor tekstu linków */
  text-decoration: none;
  font-size: 14px;
  line-height: auto;
  font-weight: bold;
  transition: color 0.3s ease-in-out; /* Animacja zmiany koloru */
  margin: 0 12px;
}

/* Styl dla ostatniego elementu nawigacji */
.nav-item:last-child {
  border-color: var(--primary) !important; /* Kolor obramowania ostatniego elementu */
  margin-left: 20px;
  transition: .3s ease-in-out;
  cursor: pointer;
}

/* Styl dla pozostałych elementów nawigacji */
.nav-item {
  position: relative;
}

/* Animacja dla elementów nawigacyjnych */
.nav-item::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: var(--primary);
  transform-origin: right;
  transition: width 0.35s ease-in-out;
}

/* Animacja dla elementów nawigacyjnych po najechaniu myszką */
.nav-item:not(:last-child):hover::after {
  width: 100%;
}

/* Styl dla ostatniego elementu nawigacji po najechaniu myszką */
.nav-item:last-child:hover {
  background-color: var(--primary) !important;
  border-color: var(--dark) !important;
}

.last:hover {
  color: black !important;
}

/* Media queries dla ekranów o szerokości do 768px */
@media (max-width: 768px) {

.nav-item {
  padding: 5px 0;
}

.nav-link {
  margin: 0;
}

.nav-item::after {
  background-color: transparent;
  left: 10px;
}

.nav-item:not(:last-child):hover::after {
  width: 29%;
}

.nav-item:last-child {
  margin: 0;
  border: none !important;
}

.last:hover {
  color: var(--white) !important; 
}

.navbar-nav > .nav-item:last-child:hover {
  background-color: transparent !important; 
  border-color: transparent !important; 
  color: var(--white) !important;
}

.navbar-nav > .nav-item:last-child:hover::after {
  width: 0; 
}

.last::after, .nav-item::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: var(--primary);
  transform-origin: right;
  transition: width 0.35s ease-in-out;
}

.last:hover::after {
  width: 15%;
}
}


</style>

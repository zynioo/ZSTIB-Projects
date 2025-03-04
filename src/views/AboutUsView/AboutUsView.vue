<template>
  <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <sectionHero>
          <template v-slot:leftBlock>
            <div class="hello">CodeCarrot Studio</div>
            <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">
              Michał Zając
            </h1>
            <p class="col-lg-10 fs-4">
              Jestem uczniem technikum programistycznego, interesuję się
              programowaniem Frontendowym i znam takie języki jak JavaScript,
              HTML i CSS w tym popularnego frameworki jak Vue czy Boostrap
            </p>
            <EmailMe></EmailMe>
          </template>
          <template v-slot:rightBlock> </template>
        </sectionHero>
      </div>
      <div class="carousel-item">
        <sectionHero>
          <template v-slot:leftBlock>
            <div class="hello">CodeCarrot Studio</div>
            <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">
              Milan Sułek
            </h1>
            <p class="col-lg-10 fs-4">
              Jestem uczniem technikum o profilu programistycznym, a moją pasją
              jest tworzenie interfejsów użytkownika oraz programowanie stron
              internetowych. Mam doświadczenie w pracy z językami takimi jak
              JavaScript, HTML i CSS, a także w wykorzystywaniu popularnych
              frameworków jak Vue czy Bootstrap.
            </p>
            <EmailMe></EmailMe>
          </template>

          <template v-slot:rightBlock> </template>
        </sectionHero>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import sectionHero from "../HomeView/Sections/SectionHero.vue";
</script>

<style scoped>
.carousel {
  margin-top: 1.5rem;
}
</style>

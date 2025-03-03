<template>
    <!-- Pierwszy blok -->
    <div class="col-lg-4">
      <div class="card">
        <div class="card-body">
          <img class="icon" :src="require(`../assets/${props.imgSrc}`)" alt="img">
          <h5 class="card-title">{{ props.title }}</h5>
          <p class="card-text">{{ props.description }}.</p>
          <div class="greenLine"></div> <!-- Zachowana zielona linia -->
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    import { defineProps } from 'vue';

    const props = defineProps<{
      title: string,
      imgSrc: string,
      description: string
    }>();
  </script>
  
  <style scoped>
  .card {
    margin-bottom: 10px; /* zmniejszono odstęp górny i dolny */
    background-color: var(--lightDark);
    border-radius: 0 !important;
    padding: 2rem 1.5625rem; /* zmniejszono padding */
    position: relative; /* dodano pozycjonowanie */
  }
  
  .card-title {
    font-size: 1.4rem; /* zmniejszono czcionkę */
    line-height: 1.6rem; /* zmniejszono odstęp między wierszami */
    font-weight: bold;
    color: var(--white);
    margin: 0.8rem 0; /* zmniejszono marginesy */
  }
  
  .card-text {
    font-size: 0.9rem; /* zmniejszono czcionkę */
    line-height: auto;
    color: var(--gray);
  }
  
  .greenLine {
    background-color: var(--primary) !important;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 6px;
    left: 0;
  }
  
  @media(max-width:540px) {
    .card-title {
      font-size: 1.2rem;
    }
    .card-text {
      font-size: 0.8rem; /* dostosowano czcionkę dla iPhone SE */
    }
  }
  @media(max-width:987px){
      .icon{
        width: 50px;
        height: 47px;
      }
  }
  </style>
  
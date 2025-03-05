<template>
  <HeaderView @open-form="updateFormSubmitted" />
  <router-view/>
</template>

<script setup lang="ts">
import HeaderView from "./components/HeaderView.vue"
import { provide, ref } from "vue";

const formSubmitted = ref<boolean>();

const updateFormSubmitted = () => {
  formSubmitted.value = false;
}

provide("value", formSubmitted);
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
@import "@/assets/colors.css";
@import "@/assets/global.css";
</style>

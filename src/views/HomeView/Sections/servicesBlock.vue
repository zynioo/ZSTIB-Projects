<template>
  <div class="col-lg-4 d-flex">
    <div class="card flex-fill">
      <div class="card-body">
        <img
          class="icon"
          :src="require(`../../../assets/Photos/${props.imgSrc}`)"
          alt="img"
        />
        <h5 class="card-title">{{ props.title }}</h5>
        <p class="card-text">{{ props.description }}.</p>
        <div class="greenLine"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  title: string;
  imgSrc: string;
  description: string;
}>();
</script>

<style scoped>
.card {
  margin-bottom: 10px;
  background-color: var(--lightDark);
  border-radius: 0 !important;
  padding: 2rem 1.5625rem;
  position: relative;
}

.card-title {
  font-size: 1.4rem;
  line-height: 1.6rem;
  font-weight: bold;
  color: var(--white);
  margin: 0.8rem 0;
}

.card-text {
  font-size: 0.9rem;
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
.icon {
  width: 50px;
  height: 47px;
}

@media (max-width: 540px) {
  .card-title {
    font-size: 1.2rem;
  }
  .card-text {
    font-size: 0.8rem;
  }
  .icon {
    width: 50px;
    height: 47px;
  }
}
</style>

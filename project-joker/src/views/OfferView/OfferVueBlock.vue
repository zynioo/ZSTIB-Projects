<template>
  <div class="card-body mr-1 d-flex flex-column align-items-center">
    <img
      :src="require(`../../assets/Photos/${imgSrc}`)"
      alt="Work"
      :class="imgSrc"
    />
    <h3 class="card-text">
      {{ title }}
    </h3>
    <div class="btn-group">
      <a class="link" :href="href"
        >Zobacz projekt
        <svg
          class="arrow-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <g
            fill="none"
            stroke="var(--primary)"
            stroke-width="1.5"
            stroke-linejoin="round"
            stroke-miterlimit="10"
          >
            <circle
              class="arrow-icon--circle"
              cx="16"
              cy="16"
              r="15.12"
            ></circle>
            <path
              class="arrow-icon--arrow"
              d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
            ></path>
          </g>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  imgSrc: string;
  href: string;
}>();
</script>

<style scoped>
h3 {
  line-height: 32px;
  font-size: 28px;
  font-weight: bold;
  color: var(--white);
}

a {
  color: var(--primary);
  font-weight: medium;
  font-size: 20px;
  text-decoration: none;
}

.link {
  display: inline-block;
  text-decoration: none;
  height: 2rem;
  line-height: 2rem;
  color: var(--primary);

  .arrow-icon {
    position: relative;
    top: -1px;
    transition: transform 0.3s ease;
    vertical-align: middle;
  }

  .arrow-icon--circle {
    transition: stroke-dashoffset 0.3s ease;
    stroke: var(--primary);
    stroke-dasharray: 95;
    stroke-dashoffset: 95;
  }

  &:hover {
    cursor: pointer;
    .arrow-icon {
      transform: translate3d(5px, 0, 0);
    }

    .arrow-icon--circle {
      stroke-dashoffset: 0;
    }
  }
}
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

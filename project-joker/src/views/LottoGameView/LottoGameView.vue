<template>
  <section class="lotto">
    <div class="container col-xxl-10">
      <div class="row d-flex">
        <!-- Formularz -->
        <div class="col-lg-6 my-2 p-0">
          <div class="services-header">
            <h2>Lotto Simulator</h2>
          </div>
          <div class="services-header">
            <div class="services-header-content">
              <hr class="line" />
              <span></span>
            </div>
            <div class="services-description">
              <p>
                To jeden z naszych projektów, tworzonych na lekcjach. Symuluje
                on popularną grę Lotto. Wprowadź swoje liczby i sprawdź czy
                wygrasz!
              </p>
            </div>
          </div>
        </div>
        <!-- Lotto game simulation -->
        <LottoGamePanel />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { inject } from "vue";

import LottoGamePanel from "./LottoGamePanel.vue";
</script>

<style scoped>
@import url(/src/assets/colors.css);

.lotto-game-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.nums-container {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 30vw;
  background-color: var(--lightDark);
  padding: 20px;
  border-radius: 10px;
}

.numbers {
  width: 3.25vw;
  height: 3.25vw;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  font-size: 22px;
}

.numbers:hover {
  background-color: var(--dark);
}

.active {
  background-color: gold;
}

.btn {
  margin-top: 20px;
  background: transparent;
  color: white;
  border-radius: 0;
  font-size: 1.1rem;
  font-weight: bold;
  border: 1px solid var(--primary);
  transition: 0.3s ease-in-out;
  padding: 0.7rem 1.4rem;
}

.btn:hover {
  background-color: var(--primary) !important;
  border-color: var(--dark) !important;
  color: black !important;
}
.lotto {
  margin-top: 4rem;
}
.container {
  padding-top: 0px;
  padding-bottom: 0px;
}

@media (max-width: 1400px) {
  .nums-container {
    width: 35vw;
    height: 35vw;
    padding: 15px;
  }
  .numbers {
    width: 4vw;
    height: 4vw;
    font-size: 18px;
  }
  .container {
    padding-top: 5px;
    padding-bottom: 5px;
  }
}

@media (max-width: 1200px) {
  .nums-container {
    width: 38vw;
    height: 38vw;
    padding: 15px;
  }
  .numbers {
    width: 4.25vw;
    height: 4.25vw;
    font-size: 18px;
  }
  .container {
    padding-top: 0px;
    padding-bottom: 0px;
  }
}

@media (max-width: 990px) {
  .lotto {
    margin-top: 2rem;
  }
  .nums-container {
    width: 50vw;
    height: 50vw;
  }
  .numbers {
    width: 5.2vw;
    height: 5.2vw;
    font-size: 15px;
  }
  .container {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
@media (max-width: 768px) {
  .nums-container {
    width: 60vw;
    height: 60vw;
    padding: 12px;
  }
  .numbers {
    width: 6.5vw;
    height: 6.5vw;
    font-size: 15px;
  }
  .container {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}

@media (max-width: 550px) {
  .nums-container {
    width: 85vw;
    height: 85vw;
    padding: 10px;
  }
  .numbers {
    width: 9vw;
    height: 9vw;
    font-size: 14px;
  }
  .container {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>

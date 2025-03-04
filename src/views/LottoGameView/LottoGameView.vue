<template>
  <section class="contact">
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
        <div class="lotto-game-panel">
          <div class="nums-container">
            <div
              v-for="number in numbers"
              :key="number"
              class="circle numberToCheck"
              @click="selectNumber(number)"
              :class="{ active: selectedNumbers.includes(number) }"
            >
              {{ number }}
            </div>
          </div>
          <button class="btn" @click="drawNumbers">Losuj</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { inject } from "vue";

const numbers = ref<number[]>(Array.from({ length: 49 }, (_, i) => i + 1));
const selectedNumbers = ref<number[]>([]);
const winningNumbers = ref<number[]>([]);

const selectNumber = (num: number) => {
  if (selectedNumbers.value.includes(num)) {
    selectedNumbers.value = selectedNumbers.value.filter((n) => n !== num);
  } else if (selectedNumbers.value.length < 6) {
    selectedNumbers.value.push(num);
  }
};

const drawNumbers = () => {
  if (selectedNumbers.value.length !== 6) {
    alert("Wybierz 6 numerów przed losowaniem!");
    return;
  }
  winningNumbers.value = [];
  while (winningNumbers.value.length < 6) {
    let randomNum = Math.floor(Math.random() * 49) + 1;
    if (!winningNumbers.value.includes(randomNum)) {
      winningNumbers.value.push(randomNum);
    }
  }
  alert(`Wylosowane numery: ${winningNumbers.value.join(", ")}`);
};
// import LottoGamePanel from "./LottoGameView.vue";
</script>

<style scoped>
/* Styl dla formularza */
</style>

<style scoped>
@import url(/src/assets/colors.css);

.contact {
  margin-top: 6rem;
}

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

.circle {
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

.circle:hover {
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
.contact {
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
  .circle {
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
  .circle {
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
  .contact {
    margin-top: 2rem;
  }
  .nums-container {
    width: 50vw;
    height: 50vw;
  }
  .circle {
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
  .circle {
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
  .circle {
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

<template>
  <div class="lotto-game-panel" v-if="!lottoStarted">
    <div class="nums-container">
      <div
        v-for="number in numbers"
        :key="number"
        class="numbers numberToCheck"
        @click="selectNumber(number)"
        :class="{ active: selectedNumbers.includes(number) }"
      >
        {{ number }}
      </div>
    </div>
    <button class="btn" @click="showResults">Losuj</button>
  </div>

  <LottoGameResultPanel
    v-else
    :selectedNumbers="selectedNumbers"
    @resetGame="resetGame"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import LottoGameResultPanel from "./LottoGameResultPanel.vue";

const lottoStarted = ref<boolean>(false);
const numbers = ref<number[]>(Array.from({ length: 49 }, (_, i) => i + 1));
const selectedNumbers = ref<number[]>([]);

const selectNumber = (num: number) => {
  if (selectedNumbers.value.includes(num)) {
    selectedNumbers.value = selectedNumbers.value.filter((n) => n !== num);
  } else if (selectedNumbers.value.length < 6) {
    selectedNumbers.value.push(num);
  }
};

const showResults = () => {
  if (selectedNumbers.value.length !== 6) {
    alert("Wybierz 6 numerów przed losowaniem!");
    return;
  }
  selectedNumbers.value.sort((a, b) => a - b);
  lottoStarted.value = true;
};

const resetGame = () => {
  selectedNumbers.value = [];
  lottoStarted.value = false;
};
</script>

<style scoped>
@import url(/src/assets/colors.css);

/* Style game panel */
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
  box-shadow: 0 0 15px rgba(0, 0, 0, .7);

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
  transition: 0.2s;
  font-size: 22px;
}

.numbers:hover {
  background-color: #59802a;
}

.active {
  background-color: gold !important;
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

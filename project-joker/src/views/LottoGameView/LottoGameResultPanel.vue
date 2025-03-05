<template>
  <div class="lotto-result">
    <h2>Wylosowane numery:</h2>
    <div class="result-nums-container">
      <div
        v-for="number in winningNumbers"
        :key="number"
        class="result-numbers"
      >
        {{ number }}
      </div>
    </div>

    <h2>Twoje numery:</h2>
    <div class="result-nums-container">
      <div
        v-for="number in selectedNumbers"
        :key="number"
        class="result-numbers"
        :class="getNumberClass(number)"
      >
        {{ number }}
      </div>
    </div>

    <h2>Liczba poprawnych numerów</h2>
    <div class="match-count">
      {{ numbersMatchCount }}
    </div>

    <button class="btn" @click="emitReturnToTable">Losuj ponownie</button>
    <div>{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, defineEmits } from "vue";

const props = defineProps<{
  selectedNumbers: number[];
}>();

const emit = defineEmits(["resetGame"]);

const winningNumbers = ref<number[]>([]);
const numbersMatchCount = ref<number>(0);
const error = ref<string | null>(null);

const getNumberClass = (number: number) => {
  return winningNumbers.value.includes(number) ? "match" : "no-match";
};

const emitReturnToTable = () => {
  emit("resetGame");
  winningNumbers.value = [];
  numbersMatchCount.value = 0;
  error.value = null;
};

const fetchResults = async () => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/generateLottoNumbers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          selectedNumbers: props.selectedNumbers,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Nie udało się pobrać wyników");
    }

    const data = await response.json();
    console.log("Fetched data:", data);

    if (Array.isArray(data.results)) {
      winningNumbers.value = data.results;
      numbersMatchCount.value = data.matchCount;
    } else {
      throw new Error("Niepoprawny format odpowiedzi API");
    }
  } catch (err) {
    error.value = (err as Error).message;
    console.error("Błąd pobierania wyników:", err);
  }
};

onMounted(() => {
  fetchResults();
});
</script>

<style scoped>
@import url(/src/assets/colors.css);

.lotto-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
}

.lotto-result h2 {
  margin-bottom: 1rem;
  color: white;
  margin-top: 1rem;
}

.result-nums-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  place-items: center;
  width: 35vw;
  background-color: var(--lightDark);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
}

.result-numbers {
  width: 3.25vw;
  height: 3.25vw;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  color: white;
  font-weight: bold;
  font-size: 22px;
}

.match {
  background-color: gold !important;
  color: black;
}

.no-match {
  background-color: red !important;
  color: white;
}

.match-count {
  font-size: 2rem;
  color: white;
  margin: 1rem 0;
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
</style>

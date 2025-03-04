<template>
  <section class="contact">
    <div class="container col-xxl-10 py-5">
      <div class="row d-flex">
        <!-- Formularz -->
        <div class="col-lg-6 my-3 p-0" v-if="!formSubmitted">
          <div class="services-header">
            <h2>Czekamy na Twoje pytania!</h2>
          </div>
          <div class="services-header">
            <div class="services-header-content">
              <hr class="line" />
              <span></span>
            </div>
            <div class="services-description">
              <p>
                Prześlij nam szczegóły dotyczące Twojego projektu, takie jak
                oczekiwania, funkcjonalności, terminy i budżet, abyśmy mogli
                przygotować ofertę i omówić współpracę.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 px-4" v-if="!formSubmitted">
          <form
            class="d-flex flex-column align-items-center emailForm"
            @submit.prevent="submitForm"
          >
            <div class="form-group py-4 w-100">
              <input
                type="text"
                class="form-control input"
                placeholder="Imię i Nazwisko"
                v-model="imieINazwisko"
              />
            </div>
            <div class="form-group py-2 w-100">
              <input
                type="email"
                class="form-control input"
                placeholder="Adres Email"
                v-model="mail"
              />
            </div>
            <div class="form-group py-4 w-100">
              <input
                type="tel"
                class="form-control input"
                placeholder="Numer Telefonu"
                v-model="NumerTelefonu"
              />
            </div>
            <div class="form-group w-100">
              <textarea
                class="form-control"
                v-model="msg"
                placeholder="Opis"
              ></textarea>
            </div>
            <button type="submit" class="my-5 btn btn-primary">
              Zatwierdź
            </button>
          </form>
        </div>

        <!-- Komunikat po przesłaniu formularza -->
        <div class="row d-flex align-items-center" v-if="formSubmitted">
          <div class="col-lg-6">
            <div class="services-header">
              <h2>Dziękujemy za przesłanie formularza!</h2>
            </div>
            <div class="services-header">
              <div class="services-header-content">
                <hr class="line" />
                <span>Skontaktuj się z nami już dziś!</span>
              </div>
              <div class="services-description">
                <p>
                  Postaramy się skontaktować z Tobą tak szybko jak będzie to
                  możliwe.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <img src="../../assets/Photos/rabitForm.png" alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { inject } from "vue";
const formSubmitted = ref(inject("value"));
const imieINazwisko = ref("");
const mail = ref("");
const NumerTelefonu = ref("");
const msg = ref("");
const submitForm = async () => {
  // Tutaj możesz dodać walidację lub inne operacje przed przesłaniem formularza

  // Przesłanie formularza
  try {
    const response = await fetch("https://formspree.io/f/mpzvbron", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imieINazwisko: imieINazwisko.value,
        mail: mail.value,
        NumerTelefonu: NumerTelefonu.value,
        msg: msg.value,
      }),
    });
    if (response.ok) {
      formSubmitted.value = true;
    } else {
      // Obsługa błędu
      console.error("Wystąpił błąd podczas przesyłania formularza.");
    }
  } catch (error) {
    // Obsługa błędu sieciowego
    console.error(
      "Wystąpił błąd sieciowy podczas przesyłania formularza:",
      error
    );
  }
};
</script>

<style scoped>
/* Styl dla formularza */
</style>

<style scoped>
@import url(/src/assets/colors.css);

.contact {
  margin-top: 6rem;
}

.form-control {
  border: none;
  background-color: transparent;
  color: var(--white);
  border-bottom: 3px solid var(--primary);
  border-radius: 0;
  font-weight: bold;
}

.form-control::placeholder {
  color: var(--white);
}

.contact .form-control:focus {
  box-shadow: none !important;
}

.btn {
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
img {
  width: 100%;
  height: 50vh;
}

@media (max-width: 990px) {
  .contact {
    margin-top: 2rem;
  }
}
</style>

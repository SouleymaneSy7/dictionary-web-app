<script setup>
import { ref } from "vue";
import axios from "axios";

import DictionarySearchItems from "./DictionarySearchItems.vue";
import BaseInstructions from "./BaseInstructions.vue";

const loadingState = ref(false);
const errorState = ref(false);

const searchQueries = ref("");
const searchData = ref(null);
const BASE_URL = ref("https://api.dictionaryapi.dev/api/v2/entries/en/");

const getData = () => {
  loadingState.value = true;

  axios({
    method: "get",
    url: `${BASE_URL.value}${searchQueries.value}`,
    responseType: "json",
  })
    .then(function (response) {
      searchData.value = response.data;
      loadingState.value = false;
    })
    .catch(function (error) {
      if (error) {
        errorState.value = true;
      }
    });

  errorState.value = false;
};
</script>

<template>
  <main class="container h-full">
    <form @submit.prevent="getData" class="mb-8">
      <label
        for="search-input"
        class="label relative w-full h-12 flex items-center justify-between px-4 rounded bg-light_theme_input_clr dark:bg-dark_theme_input_clr"
      >
        <input
          class="flex-grow placeholder:font-normal font-bold bg-light_theme_input_clr focus:outline-none dark:bg-dark_theme_input_clr"
          type="text"
          name="text"
          id="search-input"
          placeholder="Search for a word"
          v-model="searchQueries"
        />
        <span class="ml-2">
          <i
            class="fa-solid fa-magnifying-glass | text-base text-primary_clr"
          ></i>
        </span>
      </label>
    </form>

    <section v-if="errorState" class="flex items-center flex-col mt-12 h-full">
      <img
        class="w-[18.75rem] h-[18.75rem]"
        src="../assets/icons/404-illustrations.svg"
        alt="404 Illustrations"
      />

      <p class="text-center text-fs-sub-title mt-6">
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later.
      </p>
    </section>

    <section v-else-if="searchData">
      <div
        v-if="loadingState"
        class="w-full h-full flex items-center justify-center pt-24"
      >
        <div class="loading"></div>
      </div>

      <DictionarySearchItems v-else :search-data="searchData" />
    </section>

    <BaseInstructions v-else />
  </main>
</template>

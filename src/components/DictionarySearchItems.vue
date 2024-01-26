<script setup>
const props = defineProps({
  searchData: {
    required: true,
  },
});

let isPlaying = false;

const playPauseSong = () => {
  !isPlaying ? playSong() : pauseSong();
};

const playSong = () => {
  isPlaying = true;
  document.querySelector("audio").play();

  document.querySelector("#play-icon").classList.remove("fa-play");
  document.querySelector("#play-icon").classList.add("fa-pause");
};

const pauseSong = () => {
  isPlaying = false;
  document.querySelector("audio").pause();

  document.querySelector("#play-icon").classList.remove("fa-pause");
  document.querySelector("#play-icon").classList.add("fa-play");
};

const removeIcon = () => {
  document.querySelector("#play-icon").classList.remove("fa-pause");
  document.querySelector("#play-icon").classList.add("fa-play");
};
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-5">
      <div>
        <h1 class="text-fs-title capitalize">
          {{ searchData[0].word }}
        </h1>

        <p
          class="text-fs-sub-title text-primary_clr tracking-widest"
          v-if="searchData[0].phonetic || searchData[0].word"
        >
          {{ searchData[0].phonetic || searchData[0].word }}
        </p>
      </div>

      <div v-if="searchData[0].phonetics.length">
        <audio
          @ended="removeIcon"
          :src="
            searchData[0].phonetics[0].audio ||
            searchData[0].phonetics[1].audio ||
            searchData[0].phonetics[2].audio
          "
        ></audio>
      </div>

      <button
        v-if="searchData[0].phonetics.length"
        @click="playPauseSong"
        type="button"
        class="w-12 h-12 flex items-center justify-center rounded-full bg-primary_accent_clr md:w-16 md:h-16"
      >
        <i
          id="play-icon"
          class="fa-solid fa-play | text-[1.25rem] text-primary_clr md:text-[1.5rem]"
        ></i>
      </button>
    </div>

    <div>
      <div
        v-if="searchData[0].meanings"
        v-for="meaning in searchData[0].meanings"
        :key="meaning"
      >
        <div class="flex items-center gap-4 mt-6 mb-3">
          <p class="italic text-fs-sub-title capitalize">
            {{ meaning.partOfSpeech }}
          </p>
          <span class="flex-grow flex-shrink border-t border-gray-200"></span>
        </div>

        <p
          class="text-light_theme_sub_text_clr text-fs-sub-heading italic dark:text-dark_theme_sub_text_clr"
        >
          Meaning
        </p>

        <ul
          role="list"
          class="ml-8 mt-3 flex flex-col gap-1 list-disc marker:text-primary_clr"
        >
          <li
            v-for="definitionData in meaning.definitions"
            :key="definitionData"
          >
            {{ definitionData.definition }}

            <span
              v-if="definitionData.example"
              class="block text-light_theme_sub_text_clr font-normal italic dark:text-dark_theme_sub_text_clr"
            >
              Example: "{{ definitionData.example }}"
            </span>
          </li>
        </ul>

        <p
          v-if="meaning.synonyms[0]"
          class="mt-7 text-light_theme_sub_text_clr text-fs-sub-heading italic dark:text-dark_theme_sub_text_clr"
        >
          Synonyms
          <span class="text-primary_clr font-bold">
            {{ meaning.synonyms[0] }}
          </span>
        </p>

        <p
          v-if="meaning.antonyms[0]"
          class="mt-7 text-light_theme_sub_text_clr text-fs-sub-heading italic dark:text-dark_theme_sub_text_clr"
        >
          Antonyms
          <span class="text-primary_clr font-bold">
            {{ meaning.antonyms[0] }}
          </span>
        </p>
      </div>
    </div>
  </div>

  <div class="mt-6 py-5 border-t border-gray-200">
    <div class="flex items-center flex-wrap">
      <p>Source</p>
      <div class="ml-4">
        <a
          :href="searchData[0].sourceUrls[0]"
          target="_blank"
          class="flex items-center flex-wrap text-fs-link underline text-light_theme_sub_text_clr dark:text-dark_theme_sub_text_clr"
        >
          {{ searchData[0].sourceUrls[0] }}
          <i
            class="fa-solid fa-arrow-up-right-from-square | text-[0.8125rem] ml-1"
          ></i>
        </a>
      </div>
    </div>
  </div>
</template>

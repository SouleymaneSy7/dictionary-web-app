<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <header class="container pt-8 md:pt-10 pb-6">
    <nav>
      <ul class="flex justify-between items-center">
        <li>
          <a href="#" class="inline-block w-8 h-9 lg:w-9 lg:h-10">
            <img
              src="../assets/icons/logo.svg"
              alt="Website Logo"
              class="w-full h-full object-contain"
            />
          </a>
        </li>

        <li>
          <div class="flex items-center gap-2">
            <button
              @click="toggleDark()"
              class="theme-toggle-btn | relative flex items-center w-10 h-5 border-2 border-light_theme_text_clr rounded-full dark:border-primary_clr dark:bg-primary_clr"
              type="button"
              aria-label="Theme Toggle Button"
            >
              <span
                class="absolute top-[0.125rem] left-[0.125rem] translate-y--2/4 translate-x--2/4 inline-block w-3 h-3 bg-light_theme_text_clr rounded-full dark:bg-dark_theme_text_clr dark:left-[1.4375rem]"
              ></span>
            </button>
            <i
              class="fa-regular fa-moon | text-lg lg:text-xl dark:text-primary_clr"
            ></i>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

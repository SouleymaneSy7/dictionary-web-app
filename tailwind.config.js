/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        lg: "900px",
        xl: "900px",
        "2xl": "900px",
      },
    },
    extend: {
      colors: {
        primary_clr: "var(--primary-clr)",
        primary_accent_clr: "var(--primary-accent-clr)",

        light_theme_text_clr: "var(--light-theme-text-clr)",
        light_theme_sub_text_clr: "var(--light-theme-sub-text-clr)",
        light_theme_body_bg_clr: "var(--light-theme-body-bg-clr)",
        light_theme_input_clr: "var(--light-theme-input-clr)",

        dark_theme_text_clr: "var(--dark-theme-text-clr)",
        dark_theme_sub_text_clr: "var(--dark-theme-sub-text-clr)",
        dark_theme_body_bg_clr: "var(--dark-theme-body-bg-clr)",
        dark_theme_input_clr: "var(--dark-theme-input-clr)",
      },
    },
    fontFamily: {
      lekton: ["var(--font-family)"],
    },
    fontSize: {
      "fs-body": [
        "var(--fs-body)",
        {
          lineHeight: "1.5rem",
          fontWeight: "var(--fw-normal)",
        },
      ],
      "fs-input": [
        "var(--fs-input)",
        {
          lineHeight: "2rem",
          fontWeight: "var(--fw-bold)",
        },
      ],
      "fs-title": [
        "var(--fs-title)",
        {
          lineHeight: "3rem",
          fontWeight: "var(--fw-bold)",
        },
      ],
      "fs-sub-title": [
        "var(--fs-sub-title)",
        {
          lineHeight: "2rem",
          fontWeight: "var(--fw-bold)",
        },
      ],
      "fs-sub-heading": [
        "var(--fs-sub-heading)",
        {
          lineHeight: "2rem",
          fontWeight: "var(--fw-normal)",
          fontStyle: "italic",
        },
      ],
      "fs-link": [
        "var(--fs-link)",
        {
          lineHeight: "2rem",
          fontWeight: "var(--fw-normal)",
        },
      ],
    },
  },
  plugins: [],
};

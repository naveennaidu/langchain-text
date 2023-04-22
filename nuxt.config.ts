// https://nuxt.com/docs/api/configuration/nuxt-config
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      openAiKey: process.env.OPEN_AI_KEY,
    },
  },
  vite: {
    plugins: [wasm(), topLevelAwait()],
  },
});

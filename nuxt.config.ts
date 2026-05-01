// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@bootstrap-vue-next/nuxt',
  ],
  css: ['~~/assets/scss/main.scss'],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  vite: {
    optimizeDeps: {
      include: [
        'bootstrap-vue-next',
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'bootstrap-vue-next/components/BContainer',
        'bootstrap-vue-next/components/BButton',
        'bootstrap-vue-next/components/BApp',
      ],
    },
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function'],
        },
      },
    },
  },
});


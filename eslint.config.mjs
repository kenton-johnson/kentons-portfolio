// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    rules: {
      // force semicolons
      'semi': ['error', 'always'],

      // force trailing commas where valid (objects, arrays, etc.)
      'comma-dangle': ['error', 'always-multiline'],

      // enforce single quotes (optional but common)
      'quotes': ['error', 'single'],

      // enforce consistent spacing
      'space-infix-ops': 'error',

      // 2-space indentation
      'indent': ['error', 2],

      // 2-space indentation for Vue templates
      'vue/html-indent': ['error', 2],

      // 2-space indentation for Vue script blocks
      'vue/script-indent': ['error', 2],
    },
  },
);

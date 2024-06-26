// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import dynamicImport from 'vite-plugin-dynamic-import';
// import tailwindcss from 'tailwindcss';
// import path from 'path';
// import builtins from 'rollup-plugin-node-builtins';
// import tsconfigPaths from 'vite-tsconfig-paths';

// const builtinsPlugin = {
//   ...builtins({ crypto: true }),
//   name: 'rollup-plugin-node-builtins',
// };

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), builtinsPlugin, dynamicImport(/* options */), tsconfigPaths()],

//   css: {
//     postcss: {
//       plugins: [tailwindcss],
//     },
//   },
//   resolve: {
//     extensions: ['.mjs', '.js', '.cjs', '.ts', '.jsx', '.tsx', '.json', '.vue'],
//     alias: {
//       '@': path.join(__dirname, 'src'),
//     },
//   },
//   optimizeDeps: {
//     exclude: ['crypto-api'],
//   },
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     setupFiles: './vitest.setup.mjs',
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  // css: {
  //   postcss: {
  //     plugins: [tailwindcss],
  //   },
  // },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },
});

import clientConfig from "./apps/client/eslint.config.js";
import serverConfig from "./apps/server/eslint.config.mjs";
import globals from "globals";

export default [
  {
    ignores: ["**/node_modules/**", "**/dist/**"],
  },
  ...clientConfig.map((config) => ({
    ...config,
    files: ["apps/client/**/*.{js,jsx,ts,tsx}"],
  })),
  ...serverConfig.map((config) => ({
    ...config,
    files: ["apps/server/**/*.{js,mjs,cjs,ts}"],
  })),
  // Configuración global para archivos en la raíz del monorepo
  {
    files: ["*.{js,mjs,cjs,ts}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
  },
];

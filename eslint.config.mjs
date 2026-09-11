// Subpaths must be spelled without the ".js" suffix — eslint-config-next only
// exports "./core-web-vitals" and "./typescript", so the suffixed form threw
// ERR_PACKAGE_PATH_NOT_EXPORTED and no linting ran at all.
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
  ...nextVitals,
  ...nextTs,
];

export default eslintConfig;

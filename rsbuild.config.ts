import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import tailwind from "@tailwindcss/postcss";
import postcssImport from "postcss-import";
import postcssPresetMantine from "postcss-preset-mantine";
import postcssSimpleVars from "postcss-simple-vars";

export default defineConfig({
  server: {
    port: 5000,
  },
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [
          postcssImport(),
          postcssPresetMantine(),
          postcssSimpleVars({
            variables: {
              "mantine-breakpoint-xs": "36em",
              "mantine-breakpoint-sm": "48em",
              "mantine-breakpoint-md": "62em",
              "mantine-breakpoint-lg": "75em",
              "mantine-breakpoint-xl": "88em",
            },
          }),
          tailwind,
        ],
      },
    },
  },
  plugins: [pluginReact()],
});

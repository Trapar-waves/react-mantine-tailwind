import process from "node:process";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { RsdoctorRspackPlugin } from "@rsdoctor/rspack-plugin";
import tailwind from "@tailwindcss/postcss";
import postcssImport from "postcss-import";
import postcssPresetMantine from "postcss-preset-mantine";
import postcssSimpleVars from "postcss-simple-vars";
import TurboConsole from "unplugin-turbo-console/rspack";

const enableRsdoctor = Boolean(process.env.RSDOCTOR);
const enableTurboConsole = process.env.NODE_ENV === "development";

export default defineConfig({
  performance: {
    ...(enableRsdoctor ? { buildCache: false } : {}),
  },
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
    rspack: {
      plugins: [
        ...(enableTurboConsole ? [TurboConsole()] : []),
        ...(enableRsdoctor
          ? [
              new RsdoctorRspackPlugin({
                output: {
                  mode: "brief",
                  options: {
                    type: ["json"],
                  },
                },
              }),
            ]
          : []),
      ],
    },
  },
  plugins: [pluginReact()],
});

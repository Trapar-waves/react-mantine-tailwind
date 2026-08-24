import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { RsdoctorRspackPlugin } from "@rsdoctor/rspack-plugin";
import tailwind from "@tailwindcss/postcss";
import process from "node:process";
import postcssImport from "postcss-import";
import postcssPresetMantine from "postcss-preset-mantine";
import postcssSimpleVars from "postcss-simple-vars";
import TurboConsole from "unplugin-turbo-console/rspack";

function normalizeBasePath(): string {
  const raw = process.env.BASE_PATH?.trim();
  if (!raw || raw === "/") {
    return "/";
  }
  const prefixed = raw.startsWith("/") ? raw : `/${raw}`;
  return prefixed.endsWith("/") ? prefixed : `${prefixed}/`;
}

const basePath = normalizeBasePath();
const isUseSubpath = basePath !== "/";

const isEnableRsdoctor = Boolean(process.env.RSDOCTOR);
const isEnableTurboConsole = process.env.NODE_ENV === "development";

export default defineConfig({
  ...(isUseSubpath
    ? {
        output: { assetPrefix: basePath },
        server: { base: basePath, port: 5000 },
      }
    : { server: { port: 5000 } }),
  performance: {
    ...(isEnableRsdoctor && { buildCache: false }),
  },
  plugins: [pluginReact()],
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [
          postcssImport(),
          postcssPresetMantine(),
          postcssSimpleVars({
            variables: {
              "mantine-breakpoint-lg": "75em",
              "mantine-breakpoint-md": "62em",
              "mantine-breakpoint-sm": "48em",
              "mantine-breakpoint-xl": "88em",
              "mantine-breakpoint-xs": "36em",
            },
          }),
          tailwind,
        ],
      },
    },
    rspack: {
      plugins: [
        ...(isEnableTurboConsole ? [TurboConsole()] : []),
        ...(isEnableRsdoctor
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
});

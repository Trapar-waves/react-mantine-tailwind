import { createTheme, DEFAULT_THEME, MantineProvider, mergeMantineTheme } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

const rootEl = document.getElementById("root");

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  const theme = mergeMantineTheme(
    DEFAULT_THEME,
    createTheme({
    }),
  );
  root.render(
    <React.StrictMode>
      <MantineProvider theme={theme}>
        <App />
      </MantineProvider>
    </React.StrictMode>,
  );
}

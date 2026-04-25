import { createTheme, DEFAULT_THEME, MantineProvider, mergeMantineTheme } from "@mantine/core";
import { StrictMode } from "react";
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
    <StrictMode>
      <MantineProvider theme={theme}>
        <App />
      </MantineProvider>
    </StrictMode>,
  );
}

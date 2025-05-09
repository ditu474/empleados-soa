import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./index.css";
import App from "./App.jsx";

const queryClient = new QueryClient();

const theme = createTheme({
  palette: {
    primary: {
      light: "#336137",
      main: "#196844",
      dark: "#002803",
    },
    secondary: {
      light: "#ffe033",
      main: "#ffd900",
      dark: "#b29700",
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);

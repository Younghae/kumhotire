"use client";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";

const themeOptions: ThemeOptions = {
  typography: {
    fontSize: 15,
  },
  palette: {
    background: {
      default: "#ffffff",
    },
    primary: {
      light: "#4A4A49",
      main: "#4A4A49",
      dark: "#4A4A49",
      contrastText: "#ff0000",
    },
    secondary: {
      light: "#EF0010",
      main: "#EF0010",
      dark: "#EF0010",
      contrastText: "#ffffff",
    },
    info: {
      light: "#6E6E6E",
      main: "#6E6E6E",
      dark: "#6E6E6E",
      contrastText: "#ffffff",
    },
    success: {
      light: "#B4B8BA",
      main: "#B4B8BA",
      dark: "#B4B8BA",
      contrastText: "#000000",
    },
    warning: {
      light: "#D7D7D7",
      main: "#D7D7D7",
      dark: "#D7D7D7",
      contrastText: "#000000",
    },
  },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

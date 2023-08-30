"use client";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import {red, grey} from "@mui/material/colors";

const themeOptions: ThemeOptions = {
    typography: {
        fontSize:15,
    },
    palette:{
      background: {
        default: "#ffffff",
      },
      primary:{
        light: red[100],
        main: red[900],
        dark: red[700],
      contrastText: "#ff0000",
      },
      secondary: {
        light: grey[200],
        main: grey[600],
        dark: grey[900],
        contrastText: "#ffffff",
      },
  
    }
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({children,}: { 
    children: React.ReactNode
}) {
    return (
     < ThemeProvider theme={theme}>
        <CssBaseline />
            {children}
        </ThemeProvider>
    )

}
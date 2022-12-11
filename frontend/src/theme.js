import { createTheme } from "@mui/material/styles";

export const shades = {
  // primary: {
  //     100: "#cccccc",
  //     200: "#999999",
  //     300: "#666666",
  //     400: "#333333",
  //     500: "#000000",
  //     600: "#000000",
  //     700: "#000000",
  //     800: "#000000",
  //     900: "#000000"
  // },
  // secondary: {
  //     100: "#ccdaee",
  //     200: "#99b5dd",
  //     300: "#6691cd",
  //     400: "#336cbc",
  //     500: "#0047ab",
  //     600: "#003989",
  //     700: "#002b67",
  //     800: "#001c44",
  //     900: "#000e22"
  // },

  primary: {
    100: "#ccdaee",
    200: "#99b5dd",
    300: "#6691cd",
    400: "#336cbc",
    500: "#0047ab",
    600: "#003989",
    700: "#002b67",
    800: "#001c44",
    900: "#000e22",
  },

  secondary: {
    100: "#f7cfcf",
    200: "#ef9e9e",
    300: "#e76e6e",
    400: "#df3d3d",
    500: "#d70d0d",
    600: "#ac0a0a",
    700: "#810808",
    800: "#560505",
    900: "#2b0303",
  },

  neutral: {
    100: "#f5f5f5",
    200: "#ecebeb",
    300: "#e2e1e1",
    400: "#d9d7d7",
    500: "#cfcdcd",
    600: "#a6a4a4",
    700: "#7c7b7b",
    800: "#535252",
    900: "#292929",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    neutral: {
      dark: shades.neutral[700],
      main: shades.neutral[500],
      light: shades.neutral[100],
    },
  },
  typography: {
    fontFamily: ["Fauna One", "sans-serif"].join(","),
    fontSize: 11,
    h1: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 48,
    },
    h2: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 36,
    },
    h3: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 20,
    },
    h4: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});

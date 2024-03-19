import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
      heading: 'var(--font-rubik)',
      body: 'var(--font-rubik)',
    },
  colors: {
    primary: {
      50: "#e2f6f9",
      100: "#b5ebf2",
      200: "#88e0eb",
      300: "#5bceda",
      400: "#44adc1",
      500: "#4FB0C6", // original primary color
      600: "#3b92a4",
      700: "#2b7688",
      800: "#1c596b",
      900: "#0d3d4e",
    },
    accent: {
      50: "#fceef2",
      100: "#fac9d5",
      200: "#f9a3b9",
      300: "#f77e9d",
      400: "#f65980",
      500: "#F78FB3", // original accent color
      600: "#f22c68",
      700: "#c71f53",
      800: "#96173e",
      900: "#650f29",
    },
  },
});

export default theme;

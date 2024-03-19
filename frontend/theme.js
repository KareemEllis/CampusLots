import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
    50: "#e6f6f3",
    100: "#c2e7df",
    200: "#9ed8ca",
    300: "#7ac9b6",
    400: "#57baa2",
    500: "#1B998B", // original primary color
    600: "#188b79",
    700: "#157d67",
    800: "#126e55",
    900: "#0f6043",
    },
    accent: {
    50: "#f3f0fa",
    100: "#e1d7f3",
    200: "#cec0ec",
    300: "#bbaae5",
    400: "#a993de",
    500: "#DECDF5", // original accent color
    600: "#8973b1",
    700: "#72629b",
    800: "#5b5185",
    900: "#44306f",
    },
  },
});

export default theme;

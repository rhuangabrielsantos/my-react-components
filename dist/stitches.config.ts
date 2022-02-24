import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: "#E95814",
      primary700: "#F08A5B",
      primary600: "#F29B72",
      primary500: "#F4AB89",
      primary300: "#F8CDB9",
      primary100: "#FEF6F3",

      personal: "#013188",
    },
  },
  utils: {
    marginX: (value: string) => ({ marginLeft: value, marginRight: value }),
    marginY: (value: string) => ({ marginTop: value, marginBottom: value }),
    paddingX: (value: string) => ({ paddingLeft: value, paddingRight: value }),
    paddingY: (value: string) => ({ paddingTop: value, paddingBottom: value }),
  },
});

import { createTheme } from "@material-ui/core";
import palette from "./palette";

const theme = createTheme({
  palette,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
});

theme.typography = {
  ...theme.typography,
  h4: {
    fontSize: theme.typography.pxToRem(22),
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: "1.2em",
  },
};

export type Theme = typeof theme;

export { default as WithTheme } from "./withTheme";

export default theme;

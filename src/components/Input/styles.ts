import { makeStyles } from "@material-ui/styles";

import { Theme } from "../../theme";

export default makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.dark,
  },
}));

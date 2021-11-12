import { makeStyles } from "@material-ui/core";
import { Theme } from "theme";

export default makeStyles((theme: Theme) => ({
  headerText: {
    color: theme.palette.secondary.dark,
  },
  input: {
    marginTop: theme.spacing(3),
  },
  forgotPassword: {
    marginTop: theme.spacing(1.5),
  },
  orText: {
    alignSelf: "center",
    color: theme.palette.grey[500],
  },
  footer: {
    marginTop: theme.spacing(4),
    maxWidth: theme.spacing(54),
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(4),
  },
  divider: {
    marginTop: theme.spacing(8),
  },
  dontHaveAccount: {
    color: theme.palette.secondary.dark,
    fontWeight: theme.typography.fontWeightBold,
    paddingBottom: theme.spacing(1),
  },
  link: {
    fontWeight: theme.typography.fontWeightBold,
    paddingLeft: theme.spacing(0.4),
  },
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    maxWidth: theme.typography.pxToRem(438),
    width: "100%",
  },
}));

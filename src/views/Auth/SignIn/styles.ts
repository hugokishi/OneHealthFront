import { makeStyles } from "@material-ui/styles";
import { Theme } from "../../../theme";

export default makeStyles((theme: Theme) => ({
  input: {
    borderRadius: 4,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: theme.palette.grey[300],
    fontSize: 16,
    padding: "8px 12px",
    color: theme.palette.grey[800],
    backgroundColor: "#FFFFFF",
    lineHeight: "24px",
  },
  button: {
    height: "52px",
    boxShadow: "none",
    textTransform: "none",
    width: "100%",
    borderWidth: "1px",
    borderStyle: "solid",
    color: theme.palette.common.white,
    fontWeight: 500,
    fontSize: "1rem",
    padding: "8px 16px",
    borderRadius: "4px",
    lineHeight: 1.5,
    "&$disabled": {
      borderColor: theme.palette.grey[500],
      backgroundColor: theme.palette.grey[200],
    },
    contained: {
      "&:hover": {
        boxShadow: "unset",
      },
      "&$disabled": {
        borderColor: theme.palette.grey[500],
        backgroundColor: theme.palette.grey[200],
      },
    },
  },
  formInput: {
    paddingTop: theme.spacing(2),
    display: "flex"
  },
  formInputLast: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    display: "flex"
  }

}));

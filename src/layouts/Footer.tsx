import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "../theme";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: theme.spacing(1),
  },
  footerText: {
    color: theme.palette.grey[300],
    marginRight: theme.spacing(1),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle1" className={classes.footerText}>
        A product by Dev Rangers
      </Typography>
    </Box>
  );
};

export default Footer;

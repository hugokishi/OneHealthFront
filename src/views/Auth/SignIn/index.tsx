import React from "react";
import SimpleLayout from "../../../layouts";
import SimpleInput from "components/Input";
import SimpleButton from "components/Button";
import { Typography, Box, Link, Divider } from "@material-ui/core";
import useStyles from "./styles";
import { Link as RouterLink } from "react-router-dom";

const SignIn = () => {
  const classes = useStyles();

  return (
    <SimpleLayout>
      <Box className={classes.root}>
        <form>
          <Typography variant="h3" className={classes.headerText}>
            Login
          </Typography>
          <Box className={classes.input}>
            <SimpleInput
              fullWidth
              name="Email"
              id="input-email"
              defaultLabel="Email"
              placeholder="Ex.: email@email.com"
            />
          </Box>

          <Box className={classes.input}>
            <SimpleInput
              fullWidth
              name="password"
              id="input-password"
              defaultLabel="Password"
              type="password"
              placeholder="******"
            />
          </Box>
          <Box className={classes.button}>
            <SimpleButton
              fullWidth
              variant="contained"
              color="primary"
              text="Login"
            />
          </Box>
        </form>
        <Divider className={classes.divider} />
        <Box className={classes.footer}>
          <Box>
            <Typography
              color="textPrimary"
              variant="h5"
              className={classes.dontHaveAccount}
            >
              Don't have an account yet?
            </Typography>
          </Box>
          <Box>
            <Typography color="textPrimary" variant="body2">
              Start monitoring your health.
              <Link
                component={RouterLink}
                to="/sign-up"
                variant="body2"
                className={classes.link}
              >
                Sign up now
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </SimpleLayout>
  );
};

export default SignIn;

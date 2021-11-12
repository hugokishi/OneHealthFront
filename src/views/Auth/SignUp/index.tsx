import React from "react";
import SimpleInput from "components/Input";
import SimpleButton from "components/Button";
import { Typography, Box, Link } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import useStyles from "./styles";
import { Link as RouterLink } from "react-router-dom";

const SignUp = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <Box className={classes.header}>
          <img
            src="/assets/devrangers.png"
            alt="One Health"
            className={classes.image}
          />
          <Typography variant="h1" className={classes.title}>
            Register
          </Typography>
          <Typography variant="body1" className={classes.healthText}>
            Join the platform and monitor your health the best way possible
          </Typography>
          <Link
            component={RouterLink}
            to="/sign-up"
            variant="body2"
            className={classes.link}
          >
            <ArrowBack />
            Sign in Now
          </Link>
        </Box>
        <form className={classes.form}>
          <Box className={classes.input}>
            <SimpleInput
              defaultLabel="Name"
              id="input-name"
              placeholder="Ex.: One Health"
            />
          </Box>
          <Box className={classes.input}>
            <SimpleInput
              defaultLabel="Email"
              id="input-name"
              placeholder="Ex.: email@email.com"
            />
          </Box>
          <Box className={classes.input}>
            <SimpleInput
              defaultLabel="Password"
              id="input-password"
              placeholder="******"
            />
          </Box>
          <Box className={classes.input}>
            <SimpleInput
              defaultLabel="Confirm Password"
              id="input-confirm-password"
              placeholder="******"
            />
          </Box>
          <Box className={classes.input}>
            <SimpleInput
              type="date"
              id="input-date"
              defaultLabel="Date of birth"
            />
          </Box>
          <Box className={classes.input}>
            <SimpleInput
              defaultLabel="City"
              id="input-city"
              placeholder="City"
            />
          </Box>

          <SimpleButton
            text="Register"
            variant="contained"
            color="primary"
            className={classes.button}
          />
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;

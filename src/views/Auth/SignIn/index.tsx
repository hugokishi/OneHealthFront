import React from "react";
import { Typography, InputBase, FormControl, Button } from "@material-ui/core";
import SimpleLayout from "../../../layouts";
import useStyles from "./styles";

const SignIn = () => {
  const classes = useStyles();

  return (
    <SimpleLayout>
      <form>
        <Typography variant="h4"> Login </Typography>
        <FormControl className={classes.formInput}>
          <Typography variant="caption"> Email </Typography>
          <InputBase
            fullWidth
            placeholder="Ex.: email@email.com"
            className={classes.input}
          />
        </FormControl>

        <FormControl className={classes.formInputLast}>
          <Typography variant="caption"> Password </Typography>
          <InputBase fullWidth placeholder="******" className={classes.input} />
        </FormControl>

        <Button
          type="submit"
          color="primary"
          onClick={() => {
            console.log("Click");
          }}
          className={classes.button}
          variant="contained"
        >
          Sign In
        </Button>
      </form>
    </SimpleLayout>
  );
};

export default SignIn;

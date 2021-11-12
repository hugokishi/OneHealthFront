import {
  Typography,
  FormControl,
  InputBaseProps as InputBasePropsMUI,
} from "@material-ui/core";

import WithTheme from "../../theme/withTheme";

import SimpleInput from "./SimpleInput";
import useStyles from "./styles";

interface InputProps extends InputBasePropsMUI {
  defaultLabel?: string;
  placeholder?: string;
}

const Input = ({ defaultLabel, placeholder, ...props }: InputProps) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.root}>
      <Typography
        variant="h5"
        component="label"
        htmlFor={props.id}
        className={classes.label}
      >
        {defaultLabel}
      </Typography>
      <SimpleInput placeholder={placeholder} id={props.id} {...props} />
    </FormControl>
  );
};

export default WithTheme(Input);

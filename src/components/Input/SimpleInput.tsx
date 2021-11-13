import { useState } from 'react';

import { makeStyles } from '@material-ui/core';
import { InputAdornment, IconButton } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import { Theme } from '../../theme';

interface StyleProps {
  error: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  input: {
    borderRadius: 4,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: (props) => (props.error ? theme.palette.error.main : theme.palette.grey[300]),
    fontSize: 16,
    width: 'auto',
    padding: '8px 12px',
    color: theme.palette.grey[800],
    backgroundColor: '#FFFFFF',
    lineHeight: '24px',
    '&:hover': {
      border: (props) => (props.error ? '' : `1px solid ${theme.palette.primary.dark}`),
      boxShadow: (props) => (props.error ? '' : `0px 0px 4px ${theme.palette.primary.dark}`)
    }
  },
  iconPassword: {
    opacity: '0.5',
    color: (props) => (props.error ? theme.palette.error.main : ''),
    marginRight: '-5px'
  }
}));

export default function SimpleInput({ ...props }) {
  const classes = useStyles({ error: props?.error });

  const [showPassword, setShowPassword] = useState(false);

  const handleChangeIcon = () => {
    setShowPassword(!showPassword);
  };

  const type = () => {
    if (props.type === 'password') {
      return !showPassword ? 'password' : 'text';
    }

    if (props.type) return props.type;

    return 'text';
  };

  return (
    <InputBase
      {...props}
      className={classes.input}
      type={type()}
      endAdornment={
        props.type === 'password' ? (
          <InputAdornment position="end">
            <IconButton
              onClick={handleChangeIcon}
              aria-label="toggle password visibility"
              className={classes.iconPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ) : (
          props.endAdornment
        )
      }
    />
  );
}

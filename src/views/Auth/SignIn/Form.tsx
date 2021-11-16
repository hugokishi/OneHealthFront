import React from 'react';
import SimpleLayout from '../../../layouts';
import SimpleInput from 'components/Input';
import SimpleButton from 'components/Button';
import { Typography, Box, Link, Divider, FormHelperText } from '@material-ui/core';
import useStyles from './styles';
import { Link as RouterLink } from 'react-router-dom';
import useForm from './useForm/useForm';

interface FormProps {
  submitMutation: () => void;
  isLoading: boolean;
}

const Form = ({ submitMutation, isLoading }: FormProps) => {
  const classes = useStyles();

  const { handleSubmit, register, errors, watch } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const email = watch('email');
  const password = watch('password');

  return (
    <SimpleLayout>
      <Box className={classes.root}>
        <Typography variant="h3" className={classes.headerText}>
          Login
        </Typography>
        <form onSubmit={handleSubmit(submitMutation)}>
          <Box className={classes.input}>
            <SimpleInput
              fullWidth
              name="email"
              id="input-email"
              defaultLabel="Email"
              type="text"
              inputRef={register()}
              placeholder="Ex.: email@email.com"
              error={errors['email']?.message ? true : false}
            />
            <FormHelperText error>{errors['email']?.message}</FormHelperText>
          </Box>

          <Box className={classes.input}>
            <SimpleInput
              fullWidth
              name="password"
              id="input-password"
              defaultLabel="Senha"
              type="password"
              inputRef={register()}
              placeholder="******"
              error={errors['password']?.message ? true : false}
            />
            <FormHelperText error>{errors['password']?.message}</FormHelperText>
          </Box>
          <Box className={classes.button}>
            <SimpleButton
              fullWidth
              variant="contained"
              color="primary"
              text="Login"
              disabled={!email || !password || isLoading}
            />
          </Box>
        </form>
        <Divider className={classes.divider} />
        <Box className={classes.footer}>
          <Box>
            <Typography color="textPrimary" variant="h5" className={classes.dontHaveAccount}>
              Ainda não tem uma conta?
            </Typography>
          </Box>
          <Box>
            <Typography color="textPrimary" variant="body2">
              Começe a monitorar a sua saúde agora mesmo!
              <Link component={RouterLink} to="/sign-up" variant="body2" className={classes.link}>
                Cadastre-se
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </SimpleLayout>
  );
};

export default Form;

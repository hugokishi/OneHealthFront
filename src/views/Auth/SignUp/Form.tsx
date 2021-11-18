import React from 'react';
import SimpleInput from 'components/Input';
import SimpleButton from 'components/Button';
import { Typography, Box, Link, FormHelperText } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
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
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      birthDate: '',
      city: ''
    }
  });

  const name = watch('name');
  const email = watch('email');
  const password = watch('password');
  const confirmPassword = watch('confirmPassword');
  const birthDate = watch('birthDate');
  const city = watch('city');

  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <Box className={classes.header}>
          <img src="/assets/health-track.png" alt="One Health" className={classes.image} />
          <Typography variant="h1" className={classes.title}>
            Cadastro
          </Typography>
          <Typography variant="body1" className={classes.healthText}>
            Entre na plataforma e monitore sua saúde da melhor maneira possivel!
          </Typography>
          <Link component={RouterLink} to="/" variant="body2" className={classes.link}>
            <ArrowBack />
            Já possui uma conta? Faça login agora mesmo!
          </Link>
        </Box>
        <form className={classes.form} onSubmit={handleSubmit(submitMutation)}>
          <Box className={classes.input}>
            <SimpleInput
              name="name"
              defaultLabel="Nome"
              inputRef={register()}
              id="input-name"
              placeholder="Ex.: One Health"
              error={errors['name']?.message ? true : false}
            />
            <FormHelperText error>{errors['name']?.message}</FormHelperText>
          </Box>
          <Box className={classes.input}>
            <SimpleInput
              name="email"
              defaultLabel="Email"
              id="input-name"
              inputRef={register()}
              placeholder="Ex.: email@email.com"
              error={errors['email']?.message ? true : false}
            />
            <FormHelperText error>{errors['email']?.message}</FormHelperText>
          </Box>
          <Box className={classes.input}>
            <SimpleInput
              name="password"
              defaultLabel="Senha"
              inputRef={register()}
              id="input-password"
              placeholder="******"
              type="password"
              error={errors['password']?.message ? true : false}
            />
            <FormHelperText error>{errors['password']?.message}</FormHelperText>
          </Box>
          <Box className={classes.input}>
            <SimpleInput
              name="confirmPassword"
              defaultLabel="Confirme sua senha"
              id="input-confirm-password"
              placeholder="******"
              type="password"
              inputRef={register()}
              error={
                errors['confirmPassword']?.message || password !== confirmPassword ? true : false
              }
            />
            <FormHelperText error>
              {password !== confirmPassword ? "Passwords don't match" : ''}
            </FormHelperText>
          </Box>
          <Box className={classes.input}>
            <SimpleInput
              name="birthDate"
              type="date"
              id="input-date"
              defaultLabel="Data de nascimento"
              inputRef={register()}
              error={errors['birthDate']?.message ? true : false}
            />
            <FormHelperText error>{errors['birthDate']?.message}</FormHelperText>
          </Box>
          <Box className={classes.input}>
            <SimpleInput
              name="city"
              defaultLabel="Cidade"
              id="input-city"
              placeholder="Cidade"
              inputRef={register()}
              error={errors['city']?.message ? true : false}
            />
            <FormHelperText error>{errors['city']?.message}</FormHelperText>
          </Box>

          <SimpleButton
            text="Cadastrar-se"
            variant="contained"
            color="primary"
            className={classes.button}
            disabled={
              !name || !email || !password || !confirmPassword || !birthDate || !city || isLoading
            }
          />
        </form>
      </Box>
    </Box>
  );
};

export default Form;

import React from 'react';
import SimpleInput from 'components/Input';
import SimpleButton from 'components/Button';
import { Typography, Box, Link } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import useStyles from './styles';
import { Link as RouterLink, useHistory } from 'react-router-dom';

const SignUp = () => {
  const classes = useStyles();
  const history = useHistory();

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
        <form className={classes.form}>
          <Box className={classes.input}>
            <SimpleInput defaultLabel="Nome" id="input-name" placeholder="Ex.: One Health" />
          </Box>
          <Box className={classes.input}>
            <SimpleInput defaultLabel="Email" id="input-name" placeholder="Ex.: email@email.com" />
          </Box>
          <Box className={classes.input}>
            <SimpleInput defaultLabel="Senha" id="input-password" placeholder="******" />
          </Box>
          <Box className={classes.input}>
            <SimpleInput
              defaultLabel="Confirme sua senha"
              id="input-confirm-password"
              placeholder="******"
            />
          </Box>
          <Box className={classes.input}>
            <SimpleInput type="date" id="input-date" defaultLabel="Data de nascimento" />
          </Box>
          <Box className={classes.input}>
            <SimpleInput defaultLabel="Cidade" id="input-city" placeholder="Cidade" />
          </Box>

          <SimpleButton
            text="Cadastrar-se"
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => history.push('/')}
          />
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;

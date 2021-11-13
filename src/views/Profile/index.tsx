import React from "react";
import { Box, Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';
import { PowerSettingsNew } from '@material-ui/icons';
import SimpleButton from 'components/Button';

const Profile = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box className={classes.root}>
      <Box display="flex" className={classes.header}>
        <img
          title="One Health"
          alt="Logo"
          className={classes.logo}
          src={`/assets/devrangers.png`}
        />
        <Typography variant="h3" className={classes.welcome}>
          Sejá bem-vindo(a), FIAP
        </Typography>
        <SimpleButton
          variant="contained"
          color="primary"
          text="Cadastrar nova metrica"
          className={classes.button}
          onClick={() => history.push('/metrics')}
        />
        <Button variant="contained" className={classes.power}>
          <PowerSettingsNew />
        </Button>
      </Box>
      <Typography variant="h3" className={classes.text}>
        {' '}
        Minhas estatísticas{' '}
      </Typography>
    </Box>
  );
};

export default Profile;

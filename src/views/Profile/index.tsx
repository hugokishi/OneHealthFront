import React from "react";
import { Box, Typography, Button, Grid } from '@material-ui/core';
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
          src={`/assets/health-track.png`}
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
        <Button
          variant="contained"
          className={classes.power}
          onClick={() => history.push('/')}
        >
          <PowerSettingsNew />
        </Button>
      </Box>
      <Typography variant="h3" className={classes.text}>
        Minhas estatísticas
      </Typography>
      <Grid container spacing={0}>
        <Grid item sm={6} className={classes.gridItem}>
          <Typography variant="h3" className={classes.analytics}> Estatisticas de Peso</Typography>
          <Typography> Peso Atual: 72 KG </Typography>
          <Typography variant="h3" className={classes.list}> Ultimos pesos</Typography>
        </Grid>
        <Grid item sm={6} className={classes.gridItem}>
          <Typography variant="h3" className={classes.analytics}> Estatisticas de Água</Typography>
          <Typography> Agua ingerida hoje: 2 Litros </Typography>
          <Typography variant="h3" className={classes.list}> Ultima ingestão de água </Typography>
        </Grid>

      </Grid>

    </Box>
  );
};

export default Profile;

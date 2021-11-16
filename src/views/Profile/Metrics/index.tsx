import React from 'react';
import { Box, Link, Typography, MenuItem } from '@material-ui/core';
import useStyles from './styles';
import { ArrowBack } from '@material-ui/icons';
import SimpleInput from 'components/Input';
import SimpleButton from 'components/Button';
import SimpleSelect from 'components/Select';
import { Link as RouterLink } from 'react-router-dom';

const Metrics = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.content}>
        <Box className={classes.header}>
          <img src="/assets/health-track.png" alt="One Health" className={classes.image} />
          <Typography variant="h1" className={classes.title}>
            Cadastro
          </Typography>
          <Typography variant="body1" className={classes.healthText}>
            Descreva o que deseja cadastrar para podermos auxilia-lo!
          </Typography>
          <Link component={RouterLink} to="/profile" variant="body2" className={classes.link}>
            <ArrowBack />
            Voltar para home
          </Link>
        </Box>
        <form className={classes.form}>
          <Box className={classes.input}>
            <Typography variant="h5" className={classes.type}>
              Type
            </Typography>
            <SimpleSelect fullWidth>
              <MenuItem value="Water">
                Água
              </MenuItem>
            </SimpleSelect>
          </Box>
          <Box className={classes.input}>
            <SimpleInput defaultLabel="Name" id="input-name" placeholder="Ex:. One Health" />
          </Box>
          <Box className={classes.input}>
            <SimpleInput defaultLabel="Quantidade" id="input-city" placeholder="Quantidade" />
          </Box>
          <SimpleButton
            text="Cadastrar"
            variant="contained"
            color="primary"
            className={classes.button}
          />
        </form>
      </Box>
    </Box>
  )
}

export default Metrics;

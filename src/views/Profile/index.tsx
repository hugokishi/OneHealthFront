import React from 'react';
import { Box, Typography, Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';
import { PowerSettingsNew } from '@material-ui/icons';
import SimpleButton from 'components/Button';
import axios from 'services/axios';
import dayjs from 'dayjs';

const Profile = () => {
  const classes = useStyles();
  const history = useHistory();
  const [user, setUser] = React.useState({
    id: '',
    name: '',
    email: '',
    birthDate: '',
    city: '',
    createdAt: '',
    updatedAt: ''
  });
  const [lastWater, setLastWater] = React.useState({
    id: '',
    amountType: '',
    waterAmount: 0,
    user: '',
    createdAt: '',
    updatedAt: ''
  });
  const [lastWeight, setLastWeight] = React.useState({
    id: '',
    amountType: '',
    weightAmount: 0,
    createdAt: '',
    user: '',
    updatedAt: ''
  });
  const [lastFood, setLastFood] = React.useState({
    id: '',
    foodName: '',
    createdAt: '',
    user: '',
    updatedAt: ''
  });
  const [water, setWater] = React.useState([
    {
      id: '',
      amountType: '',
      waterAmount: 0,
      user: '',
      createdAt: '',
      updatedAt: ''
    }
  ]);
  const [weight, setWeight] = React.useState([
    {
      id: '',
      amountType: '',
      weightAmount: 0,
      createdAt: '',
      user: '',
      updatedAt: ''
    }
  ]);
  const [food, setFood] = React.useState([
    {
      id: '',
      foodName: '',
      createdAt: '',
      user: '',
      updatedAt: ''
    }
  ]);

  React.useEffect(() => {
    async function getInformations() {
      const token = localStorage.getItem('@App/JWT');
      try {
        const user = await axios.get('/users', { headers: { Authorization: `Bearer ${token}` } });
        const Lastwater = await axios.get('/last-water-consumption', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const Lastweight = await axios.get('/last-weight', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const Lastfood = await axios.get('/last-food-consumption', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const water = await axios.get('/water-consumption', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const weight = await axios.get('/weight', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const food = await axios.get('/food-consumption', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(user.data?.data);
        setLastWater(Lastwater.data?.data);
        setLastWeight(Lastweight.data?.data);
        setLastFood(Lastfood.data?.data);
        setWater(water.data?.data);
        setWeight(weight.data?.data);
        setFood(food.data?.data);
        return;
      } catch (err) {
        return;
      }
    }
    getInformations();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    return history.push('/');
  };

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
          Sejá bem-vindo(a), {user?.name}
        </Typography>
        <SimpleButton
          variant="contained"
          color="primary"
          text="Cadastrar nova metrica"
          className={classes.button}
          onClick={() => history.push('/metrics')}
        />
        <Button variant="contained" className={classes.power} onClick={handleLogout}>
          <PowerSettingsNew />
        </Button>
      </Box>
      <Typography variant="h3" className={classes.text}>
        Minhas estatísticas
      </Typography>
      <Grid container spacing={0} justifyContent="space-between">
        <Grid item sm={5} className={classes.gridItem}>
          <Typography variant="h3" className={classes.analytics}>
            Estatisticas de Peso
          </Typography>
          <Typography>
            Ultimo Registro de peso: {lastWeight?.weightAmount || '0'} {lastWeight?.amountType}{' '}
          </Typography>
          <Typography variant="h3" className={classes.list}>
            Ultimos pesos
          </Typography>
          {weight.length > 0 &&
            weight.map((weight: any) => {
              return (
                <>
                  <Typography key={weight?.id}>
                    {weight?.weightAmount} {weight?.amountType} -{' '}
                    {dayjs().format('DD-MM-YYYY HH:mm:ss')}
                  </Typography>
                </>
              );
            })}
        </Grid>
        <Grid item sm={5} className={classes.gridItem}>
          <Typography variant="h3" className={classes.analytics}>
            Estatisticas de Comida
          </Typography>
          <Typography>Ultimo Registro de comida ingerida: {lastFood?.foodName || 'Nada'}</Typography>
          <Typography variant="h3" className={classes.list}>
            Ultimas ingestões de comida
          </Typography>
          {food.length > 0 &&
            food.map((food: any) => {
              return (
                <>
                  <Typography key={food?.id}>
                    {food?.foodName} - {dayjs().format('DD-MM-YYYY HH:mm:ss')}
                  </Typography>
                </>
              );
            })}
        </Grid>
        <Grid item sm={12} className={classes.gridItem}>
          <Typography variant="h3" className={classes.analytics}>
            Estatisticas de Água
          </Typography>
          <Typography>
            Ultimo Registro de água ingerida: {lastWater?.waterAmount || '0'} {lastWater?.amountType}{' '}
          </Typography>
          <Typography variant="h3" className={classes.list}>
            Ultimas ingestões de água
          </Typography>
          {water.length > 0 &&
            water.map((water: any) => {
              return (
                <>
                  <Typography key={water?.id}>
                    {water?.waterAmount} {water?.amountType} -{' '}
                    {dayjs().format('DD-MM-YYYY HH:mm:ss')}
                  </Typography>
                </>
              );
            })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;

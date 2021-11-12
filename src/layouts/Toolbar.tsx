import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link as RouterLink } from 'react-router-dom';
import { Theme } from '../theme';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.light})`
  },
  logo: {
    height: '38px',
    padding: '10px',
  }
}));

const Toobar = () => {
  const classes = useStyles();

  return (
    <AppBar elevation={0} position="fixed" className={classes.root}>
      <Toolbar>
        <RouterLink to="/sign-in">
        <img
            title="One Platform"
            alt="Logo"
            className={classes.logo}
            src={`/assets/one-health.png`}
          />
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

export default Toobar;

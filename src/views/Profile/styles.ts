import { makeStyles } from '@material-ui/core';
import { Theme } from 'theme';

export default makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    maxWidth: '1180px',
    padding: '0 30px',
    margin: '32px auto'
  },
  header: {
    alignItems: 'center'
  },
  logo: {
    width: '250px',
    height: '106px'
  },
  power: {
    height: '60px',
    width: '60px',
    borderRadius: '4px',
    border: '1px solid #dcdce6',
    background: 'transparent',
    marginLeft: '16px',
    transition: 'border-color 0.2s'
  },
  text: {
    marginTop: theme.spacing(10)
  },
  welcome: {
    marginLeft: '24px'
  },
  button: {
    width: '260px',
    marginLeft: 'auto',
    marginTop: 0
  }
}));

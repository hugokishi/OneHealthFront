import { makeStyles } from '@material-ui/core';
import { Theme } from 'theme';

export default makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    maxWidth: theme.typography.pxToRem(1180),
    padding: '0 30px',
    margin: '32px auto'
  },
  header: {
    alignItems: 'center'
  },
  logo: {
    width: theme.typography.pxToRem(250),
    height: theme.typography.pxToRem(106)
  },
  power: {
    height: theme.typography.pxToRem(60),
    width: theme.typography.pxToRem(60),
    borderRadius: theme.typography.pxToRem(4),
    border: '1px solid #dcdce6',
    background: 'transparent',
    marginLeft: theme.typography.pxToRem(16),
    transition: 'border-color 0.2s'
  },
  text: {
    marginTop: theme.spacing(10)
  },
  welcome: {
    marginLeft: theme.typography.pxToRem(24)
  },
  button: {
    width: theme.typography.pxToRem(260),
    marginLeft: 'auto',
    marginTop: 0
  }
}));

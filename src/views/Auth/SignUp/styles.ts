import { makeStyles } from '@material-ui/core';
import { Theme } from 'theme';

export default makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    maxWidth: theme.typography.pxToRem(1120),
    height: '100vh',
    margin: '0 auto',

    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center'
  },
  content: {
    width: '100%',
    padding: theme.typography.pxToRem(96),
    background: '#f0f0f5',
    boxShadow: '0 0 100px rgba(0, 0, 0, 0.1)',
    borderRadius: theme.typography.pxToRem(8),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  header: {
    width: '100%',
    maxWidth: theme.typography.pxToRem(380)
  },
  image: {
    textAlign: 'center'
  },
  link: {
    fontWeight: theme.typography.fontWeightBold,
    display: 'flex',
    alignItems: 'center'
  },
  form: {
    width: '100%',
    maxWidth: theme.typography.pxToRem(450)
  },
  input: {
    marginTop: theme.spacing(1)
  },
  button: {
    marginTop: theme.spacing(2)
  },
  healthText: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3)
  },
  title: {
    margin: '64px 0 32px',
    color: theme.palette.common.black,
    fontSize: theme.typography.pxToRem(32)
  }
}));

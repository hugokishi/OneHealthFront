import { makeStyles } from '@material-ui/core';
import { Theme } from 'theme';

export default makeStyles((theme: Theme) => ({
  container: {
    width: '100%',
    maxWidth: '1120px',
    height: '100vh',
    margin: '0 auto',

    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
  },
  content: {
    width: '100%',
    padding: '96px',
    background: '#f0f0f5',
    boxShadow: '0 0 100px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    display: 'flex',
    justifyContent:' space-between',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    maxWidth: theme.typography.pxToRem(380)
  },
  image: {
    textAlign: 'center'
  },
  title: {
    margin: '64px 0 32px',
    color: theme.palette.common.black,
    fontSize: theme.typography.pxToRem(32)
  },
  healthText: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3)
  },
  link: {
    fontWeight: theme.typography.fontWeightBold,
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    marginTop: theme.spacing(1)
  },
  button: {
    marginTop: theme.spacing(2)
  },
  form: {
    width: '100%',
    maxWidth: theme.typography.pxToRem(450)
  },
}));

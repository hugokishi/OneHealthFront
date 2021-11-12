import { Box, makeStyles } from '@material-ui/core';
import { Theme } from '../theme';

import Footer from './Footer';
import Toolbar from './Toolbar';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 'calc(100vh - 64px)',
    minHeight: '100%',
    paddingTop: theme.spacing(8),
    justifyContent:'center',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '30.375rem',
    height: '100%',
    paddingTop: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
}));

interface ComponentProps {
  children: React.ReactNode;
}

const Layout = (props: ComponentProps) => {
  const { children } = props;

  const classes = useStyles();

  return (
    <>
      <Toolbar />

      <Box display="flex" className={classes.root}>
        <Box className={classes.main}>
          <Box>{children}</Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Layout;

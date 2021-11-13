import { createTheme } from '@material-ui/core';

import overrides from './overrides';
import palette from './palette';

const theme = createTheme({
  palette,
  overrides,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
});

theme.typography = {
  ...theme.typography,
  h1: {
    fontSize: theme.typography.pxToRem(64),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: '1em'
  },
  h2: {
    fontSize: theme.typography.pxToRem(40),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: '1em'
  },
  h3: {
    fontSize: theme.typography.pxToRem(28),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: '1em'
  },
  h4: {
    fontSize: theme.typography.pxToRem(22),
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: '1.2em'
  },
  h5: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: '1.4em'
  },
  body1: {
    fontSize: theme.typography.pxToRem(22),
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: '1.2em'
  },
  body2: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: '1.2em'
  },
  button: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: '1em'
  },
  caption: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: '1.4em'
  },
  overline: {
    fontSize: theme.typography.pxToRem(64),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: '1em'
  }
};

export type Theme = typeof theme;

export { default as WithTheme } from './withTheme';

export default theme;

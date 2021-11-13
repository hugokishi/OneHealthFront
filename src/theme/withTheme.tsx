import React from 'react';

import { ThemeProvider, CssBaseline } from '@material-ui/core';

import theme from '.';

export const WithTheme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

interface WithThemeV1HocProps {}

const WithThemeV1 =
  <P extends WithThemeV1HocProps = WithThemeV1HocProps>(Component: React.ComponentType<P>) =>
  (props: Omit<P, keyof WithThemeV1HocProps>) =>
    (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...(props as P)} />
      </ThemeProvider>
    );

export default WithThemeV1;

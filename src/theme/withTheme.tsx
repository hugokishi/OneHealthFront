import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./";

export const WithTheme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

interface WithThemeHocProps {}

const WithThemeV1 =
  <P extends WithThemeHocProps = WithThemeHocProps>(
    Component: React.ComponentType<P>
  ) =>
  (props: Omit<P, keyof WithThemeHocProps>) =>
    (
      <ThemeProvider theme={theme}>
        <Component {...(props as P)} />
      </ThemeProvider>
    );

export default WithThemeV1;

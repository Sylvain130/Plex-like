import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Queries, render, RenderOptions, RenderResult } from '@testing-library/react';
import React, { FC, ReactElement } from 'react';
import './i18n';
import theme from './assets/Themes/Theme';


interface IProvidersProps {
  children: React.ReactNode;
}

const Providers: FC<IProvidersProps> = ({children}: IProvidersProps): JSX.Element => (
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
  </React.StrictMode>
);


export default <Q extends Queries>(
  ui: ReactElement<unknown>,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult<Q, Element | DocumentFragment> =>
  render<Q, Element | DocumentFragment>(ui, {
    wrapper: Providers,
    ...options,
  });

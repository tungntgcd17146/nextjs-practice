import React from 'react';
import type { Preview } from '@storybook/react';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import { defaultTheme } from '../src/materialTheme';
import ModeContextProvider from '../src/contexts/modeContext/index';

/* snipped for brevity */

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      dark: defaultTheme(true),
      light: defaultTheme(false),
    },
    defaultTheme: 'dark',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),

  // Decorator for providing the mode (you may need to adjust the actual implementation)
  (Story, context) => {
    return (
      <ModeContextProvider>
        <Story {...context} />
      </ModeContextProvider>
    );
  },
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ['autodocs'],
};

export default preview;

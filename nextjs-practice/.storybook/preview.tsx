import React from "react";
import type { Preview } from "@storybook/react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import { defaultTheme } from "../src/materialTheme";
import { ModeProvider } from "../src/contexts/modeContext/modeProvider";

/* snipped for brevity */

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      dark: defaultTheme(true),
      light: defaultTheme(false),
    },
    defaultTheme: "dark",
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),

  // Decorator for providing the mode (you may need to adjust the actual implementation)
  (Story, context) => {
    return (
      <ModeProvider>
        <Story {...context} />
      </ModeProvider>
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
};

export default preview;

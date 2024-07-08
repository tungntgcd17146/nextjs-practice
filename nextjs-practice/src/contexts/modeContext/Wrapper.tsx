'use client';

import { ThemeProvider } from '@mui/material';
import React from 'react';
import { useMode } from '@/src/contexts/modeContext/useModeContext';
import { defaultTheme } from '@/src/materialTheme';

export default function ComponentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isDarkMode } = useMode();

  return (
    <ThemeProvider theme={defaultTheme(isDarkMode)}>{children}</ThemeProvider>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import ModeContextProvider from '@/src/contexts/modeContext';
import StyledEngineProvider from '@mui/styled-engine/StyledEngineProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Products Dashboard',
    default: 'Products Dashboard',
  },
  description: 'Product Dashboard page, built using App Router.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledEngineProvider injectFirst>
          <ModeContextProvider>
            <CssBaseline />
            {children}
          </ModeContextProvider>
        </StyledEngineProvider>
      </body>
    </html>
  );
}

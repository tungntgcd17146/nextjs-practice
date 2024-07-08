'use client';

import HeaderWrapper from '@/src/components/layouts/Header/HeaderWrapper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import useScreenWidth from '@/src/hooks/useScreenWidth';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isTablet, isDesktop } = useScreenWidth();

  return (
    <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
      <HeaderWrapper />

      <Box sx={{ marginLeft: isTablet ? '80px' : isDesktop ? '330px' : '0px' }}>
        {children}
      </Box>
    </Grid>
  );
}

'use client';

//mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box/Box';
import Grid from '@mui/material/Grid';

//components
import Customer1 from '@/public/assets/customer1.webp';
import BackgroundImage from '@/src/components/layouts/Shop/BackgroundImage';
import OwnerInfo from '@/src/components/layouts/Shop/OwnerInfo';

import ContentHeader from '@/src/components/layouts/Shop/ContentHeader';

//utils
import useScreenWidth from '@/src/hooks/useScreenWidth';
import { ShopProvider } from '@/src/contexts/shopContext/ShopContext';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isMobile, isTablet, isDesktop } = useScreenWidth();
  const theme = useTheme();

  return (
    <ShopProvider>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: isTablet ? '80px' : isDesktop ? '330px' : '0px',
          padding: '0px',
        }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <BackgroundImage />
        <Grid container sx={{ maxWidth: '1200px', padding: '16px' }}>
          <Grid
            container
            display="flex"
            justifyContent="center"
            sx={{
              padding: '24px',
              height: '100%',
              width: '100%',
              backgroundColor: theme.palette.background.paper,
              borderRadius: '8px',
              position: 'relative',
              marginTop: isMobile ? '-200px' : '-154px',
            }}
          >
            <OwnerInfo
              name="Chelsie Haley"
              description="Dream big. Think different.Do great!"
              avatar={Customer1}
            />
            <>
              <ContentHeader />
              {children}
            </>
          </Grid>
        </Grid>
      </Box>
    </ShopProvider>
  );
}

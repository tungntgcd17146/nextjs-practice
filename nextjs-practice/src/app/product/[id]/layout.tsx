'use client';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

//component
import Header from '@/src/components/layouts/ProductDetail/Header';
import SocialInfo from '@/src/components/layouts/ProductDetail/SocialInfo';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      {/* Header */}
      <Header />

      <Box
        sx={{
          padding: '24px',
        }}
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Box
          sx={(theme) => ({
            backgroundColor: theme.palette.background.paper,
            borderRadius: '8px',
            width: '1000px',
            padding: '16px',
          })}
          display="flex"
          flexDirection="column"
        >
          {children}

          {/* Divider */}
          <Divider
            sx={(theme) => ({
              marginTop: '64px',
              marginBottom: '64px',
              color: theme.palette.grey[100],
            })}
          />
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
          <SocialInfo />
        </Box>
      </Box>
    </Box>
  );
}

import HeaderWrapper from '@/src/components/layouts/Header/HeaderWrapper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
      <HeaderWrapper />

      <Box
        sx={{
          ml: {
            xs: '0px',
            md: '80px',
            xl: '330px',
          },
        }}
      >
        {children}
      </Box>
    </Grid>
  );
}

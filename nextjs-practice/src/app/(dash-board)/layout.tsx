import Header from '@/src/components/layouts/Header';
import Grid from '@mui/material/Grid';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
      <Header />

      {children}
    </Grid>
  );
}

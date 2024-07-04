
import HeaderWrapper from '@/src/components/layouts/Header/HeaderWrapper';
import Grid from '@mui/material/Grid';


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
      <HeaderWrapper />

      {children}
    </Grid>
  );
}

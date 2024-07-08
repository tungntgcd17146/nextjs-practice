import Box from '@mui/material/Box';

//component
import Header from '@/src/components/layouts/ProductDetail/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      {/* Header */}
      <Header />

      {children}
    </Box>
  );
}

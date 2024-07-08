import { Box, Card, CardContent, Skeleton, useTheme } from '@mui/material';

const CardSkeleton = () => {
  const theme = useTheme();

  return (
    <Card
      data-testid="CardSkeleton"
      sx={{
        maxWidth: 560,
        maxHeight: 276,
        backgroundColor: theme.palette.background.paper,
        boxShadow: 'none',
        backgroundImage: 'none',
        margin: '32px 12px 0px 12px',
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height="200px"
          sx={{ borderRadius: '12px' }}
        />
      </Box>
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: '8px',
          }}
        >
          <Skeleton
            variant="text"
            width="60%"
            height={24}
            sx={{ marginBottom: '12px' }}
          />
          <Skeleton variant="rectangular" width="20%" height={32} />
        </Box>
        <Skeleton variant="text" width="40%" height={24} />
      </CardContent>
    </Card>
  );
};

export default CardSkeleton;

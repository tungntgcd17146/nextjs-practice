import React from 'react';
import { Skeleton } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const DetailContentSkeleton = () => {
  return (
    <>
      <Grid
        data-testid="Detail_Content_Skeleton"
        container
        sx={{
          marginBottom: '32px',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
        }}
        display="flex"
        justifyContent="space-between"
      >
        <Grid item xs={12} md={6}>
          <Box sx={{ marginBottom: '16px' }}>
            <Skeleton variant="rectangular" width="100%" height={40} />
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          flexDirection="row"
          justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
        >
          <Skeleton
            variant="rectangular"
            width={80}
            height={40}
            sx={{ marginRight: '16px' }}
          />
          <Skeleton
            variant="rectangular"
            width={80}
            height={40}
            sx={{ marginRight: '16px' }}
          />
          <Skeleton variant="rectangular" width={120} height={40} />
        </Grid>
      </Grid>

      <Typography variant="h5" sx={{ marginBottom: '12px' }}>
        <Skeleton />
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '12px' }}>
        <Skeleton width="60%" />
      </Typography>

      <Box
        display="flex"
        sx={{
          marginBottom: '32px',
          flexDirection: 'row',
        }}
        alignItems="center"
      >
        <Skeleton
          variant="circular"
          width={40}
          height={40}
          sx={{ marginRight: '12px', marginLeft: '12px' }}
        />
        <Skeleton variant="text" width={100} sx={{ marginLeft: '12px' }} />
        <Skeleton variant="text" width={60} sx={{ marginLeft: '12px' }} />
      </Box>
    </>
  );
};

export default DetailContentSkeleton;

import React from 'react';
import { Skeleton } from '@mui/material';
import Box from '@mui/material/Box';
import { themes } from '@/src/themes';

const DetailFeatureSkeleton = () => {
  return (
    <Box
      sx={{
        width: {
          lg: '100%',
          xl: '40%',
        },
      }}
      data-testid="Detail_Feature_Skeleton"
    >
      <Box
        display="flex"
        flexDirection="row"
        sx={{ marginTop: '32px', marginBottom: '12px' }}
      >
        <Skeleton
          variant="rectangular"
          width={16}
          height={32}
          sx={{ borderRadius: '6px', backgroundColor: themes.colors.gray[500] }}
        />
        <Skeleton
          variant="text"
          width={100}
          height={32}
          sx={{ marginLeft: '12px' }}
        />
      </Box>
      {[...Array(3)].map((_, index) => (
        <Skeleton
          key={index}
          variant="text"
          width="100%"
          height={24}
          sx={{ marginBottom: '16px' }}
        />
      ))}
    </Box>
  );
};

export default DetailFeatureSkeleton;

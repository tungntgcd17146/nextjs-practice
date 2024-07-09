//img
import CoverPhoto from '@/public/assets/CoverPhoto.webp';
import CoverPhotoMobile from '@/public/assets/CoverPhotoMobile.webp';

import Box from '@mui/material/Box';

import Image from 'next/image';

const BackgroundImage = () => (
  <>
    <Box
      sx={{
        width: '100%',
        height: '252px',
        position: 'relative',
        display: {
          xs: 'block',
          md: 'block',
          lg: 'none',
          xl: 'none',
        },
      }}
    >
      <Image
        data-testid="BackgroundImage_Mobile"
        src={CoverPhotoMobile}
        alt="CoverPhotoMobile.webp"
        fill
        style={{
          objectFit: 'cover',
        }}
        sizes="100%"
        loading="eager"
        priority
      />
    </Box>
    <Box
      sx={{
        width: '100%',
        height: '400px',
        position: 'relative',
        display: {
          xs: 'none',
          md: 'none',
          lg: 'block',
          xl: 'block',
        },
      }}
    >
      <Image
        data-testid="BackgroundImage"
        src={CoverPhoto}
        alt="CoverPhoto.webp"
        fill
        style={{
          objectFit: 'cover',
        }}
        sizes="100%"
        loading="eager"
        priority
      />
    </Box>
  </>
);

export default BackgroundImage;

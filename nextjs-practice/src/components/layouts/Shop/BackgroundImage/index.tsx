import { memo } from 'react';

//img
import CoverPhoto from '@/public/assets/CoverPhoto.webp';
import CoverPhotoMobile from '@/public/assets/CoverPhotoMobile.webp';

import Image from 'next/image';

import useScreenWidth from '@/src/hooks/useScreenWidth';

const BackgroundImage = () => {
  const { isMobile } = useScreenWidth();

  if (isMobile) {
    return (
      <div
        style={{
          width: '100%',
          height: '252px',
          position: 'relative',
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
        />
      </div>
    );
  }

  return (
    <div
      style={{
        width: '100%',
        height: '400px',
        position: 'relative',
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
      />
    </div>
  );
};

export default memo(BackgroundImage);

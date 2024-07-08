import React, { memo, useState } from 'react';

//mui
import { Modal, Fade } from '@mui/material';
import Box from '@mui/material/Box';

import useScreenWidth from '@/src/hooks/useScreenWidth';

import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface Props {
  image: string | StaticImport;
  alt: string;
  overrideContainerStyles?: React.CSSProperties;
}

const ImageDrawer = ({
  image,
  alt = 'Product Detail',
  overrideContainerStyles,
}: Props) => {
  const [open, setOpen] = useState(false);

  const { matchedBreakpoint } = useScreenWidth({ down: 'lg' });

  const handleClose = () => {
    setOpen(false);
  };

  const handleImage = () => {
    setOpen(true);
  };

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '650px',
          position: 'relative',
          ...overrideContainerStyles,
        }}
      >
        <Image
          data-testid="ImageDrawer_Img"
          src={image}
          alt={alt}
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            e.stopPropagation();
            handleImage();
          }}
          style={{
            objectFit: 'cover',
            cursor: 'pointer',
            borderRadius: '12px',
          }}
          fill
          sizes="100%"
          loading="eager"
          priority
        />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Fade in={open} timeout={500}>
          <Box
            sx={{
              height: '1000px',
              width: matchedBreakpoint ? '100%' : '70%',
              position: 'relative',
            }}
          >
            <Image
              data-testid="ImageDrawer_Img_Modal"
              src={image}
              alt={alt}
              style={{ objectFit: 'cover', borderRadius: '16px' }}
              fill
              sizes="100%"
              loading="eager"
            />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default memo(ImageDrawer);

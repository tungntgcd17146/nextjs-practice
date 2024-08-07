'use client';

import { memo } from 'react';

//component
import Button from '@/src/components/ui/Button';
import Tabs from '@/src/components/ui/Tabs';
import Rating from '@/src/components/ui/Rating';
import Avatar from '@/src/components/ui/Avatar';
import Customer1 from '@/public/assets/customer1.webp';

//utils
import { themes } from '@/src/themes';
import { Product } from '@/src/types/product';

//mui
import { useTheme } from '@mui/material';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export interface Props {
  product: Product;
}
const DetailContent = ({ product }: Props) => {
  const theme = useTheme();

  const {
    productName,
    productCategory,
    productPrice,
    productRating,
    productRatingCount,
  } = product;

  return (
    <>
      <Box
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
        <Tabs
          sx={{ marginBottom: '16px', pointerEvents: 'none' }}
          tabItems={[
            { text: 'Product', isSelected: true },
            { text: 'Comments', isDisabled: true },
          ]}
          tabSelected={0}
        />

        <Box
          display="flex"
          flexDirection="row"
          sx={{
            justifyContent: {
              xs: 'flex-start',
              md: 'flex-start',
              lg: 'flex-end',
            },
          }}
        >
          <Button
            aria-label="favorite"
            children="32"
            color="inherit"
            sx={{ marginRight: '16px', pointerEvents: 'none' }}
            startIcon={
              <FavoriteOutlinedIcon sx={{ color: themes.colors.red[500] }} />
            }
          />

          <Button
            aria-label="product-price"
            color="primary"
            sx={{
              borderTopRightRadius: '0px',
              borderBottomRightRadius: '0px',
              pointerEvents: 'none',
            }}
            endIcon={<Divider orientation="vertical" />}
          >
            {`$${productPrice}`}
          </Button>
          <Button
            disabled
            aria-label="download"
            children="Download"
            color="primary"
            sx={{ borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }}
            endIcon={<FileDownloadIcon />}
          />
        </Box>
      </Box>

      {/* Content */}
      <Typography
        variant="h5"
        sx={{ marginBottom: '12px', color: theme.palette.text.secondary }}
      >
        {`Fleet - ${productName} ${productCategory}`}
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginBottom: '12px', color: theme.palette.text.primary }}
      >
        Elegant product mockup for your next project
      </Typography>

      <Box display="flex" alignItems="center" sx={{ marginBottom: '32px' }}>
        <Avatar
          imgNextSrc={Customer1}
          sx={{ marginRight: '12px', marginLeft: '12px' }}
          size="small"
          alt={'Customer1'}
          avtBackground={themes.colors.yellow[600]}
        />
        <Typography
          variant="body1"
          sx={{ color: theme.palette.text.primary, marginLeft: '12px' }}
        >
          by Chelsie Haley
        </Typography>
        <Rating
          sx={{ marginLeft: '12px' }}
          ratingPoint={productRating}
          counter={productRatingCount}
        />
      </Box>
    </>
  );
};

export default memo(DetailContent);

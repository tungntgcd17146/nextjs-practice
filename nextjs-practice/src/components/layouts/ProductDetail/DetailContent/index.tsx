import { memo } from 'react';

//component
import Button from '@/src/components/ui/Button';
import Tabs from '@/src/components/ui/Tabs';
import Rating from '@/src/components/ui/Rating';
import Avatar from '@/src/components/ui/Avatar';
import Customer1 from '@/public/assets/customer1.webp';

//utils
import useScreenWidth from '@/src/hooks/useScreenWidth';
import { themes } from '@/src/themes';
import { Product } from '@/src/types/product';

//mui
import { useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

interface Props {
  product: Product;
}
const DetailContent = ({ product }: Props) => {
  const theme = useTheme();
  const { isMobile } = useScreenWidth();

  const {
    productName,
    productCategory,
    productPrice,
    productRating,
    productRatingCount,
  } = product;

  return (
    <>
      <Grid
        container
        sx={{ marginBottom: '32px' }}
        display="flex"
        justifyContent="space-between"
      >
        <Grid item xs={12} md={6}>
          <Tabs
            sx={{ marginBottom: '16px' }}
            tabItems={[
              { text: 'Product', isSelected: true },
              { text: 'Comments', isDisabled: true },
            ]}
            tabSelected={0}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          flexDirection="row"
          justifyContent={!isMobile ? 'flex-end' : 'flex-start'}
        >
          <Button
            aria-label="favorite"
            children="32"
            color="inherit"
            sx={{ marginRight: '16px' }}
            startIcon={
              <FavoriteOutlinedIcon sx={{ color: themes.colors.red[500] }} />
            }
          />

          <Button
            aria-label="product-price"
            children={`$${productPrice}`}
            color="primary"
            sx={{
              borderTopRightRadius: '0px',
              borderBottomRightRadius: '0px',
            }}
            endIcon={<Divider orientation="vertical" />}
          />
          <Button
            aria-label="download"
            children="Download"
            color="primary"
            sx={{ borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }}
            endIcon={<FileDownloadIcon />}
          />
        </Grid>
      </Grid>

      {/* Content */}
      {/* Header */}
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

      <Grid
        display="flex"
        flexDirection="row"
        alignItems="center"
        sx={{ marginBottom: '32px' }}
      >
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
      </Grid>
    </>
  );
};

export default memo(DetailContent);

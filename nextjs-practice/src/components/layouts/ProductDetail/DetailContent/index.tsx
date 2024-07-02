import { memo } from 'react';

//component
import Button from '@/src/components/ui/Button';
import Tabs from '@/src/components/ui/Tabs';
import Rating from '@/src/components/ui/Rating';
import ImageDrawer from '@/src/components/ui/ImageDrawer';
import Chip from '@/src/components/ui/Chip';
import Avatar from '@/src/components/ui/Avatar';
import Customer1 from '@/public/assets/customer1.webp';
import ProductDetailDark from '@/public/assets/ProductDetailImgDark.webp';
import ProductDetailLight from '@/public/assets/ProductDetailImgLight.webp';

//utils
import useScreenWidth from '@/src/hooks/useScreenWidth';
import { themes } from '@/src/themes';
import { FeatureProduct } from '@/src/types/product';
import { useMode } from '@/src/contexts/modeContext/useModeContext';

//mui
import { useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CheckIcon from '@mui/icons-material/Check';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {
  fakeFeatureForProductData,
  fakeProductOverview,
} from '@/src/mocks/commonData';

export interface Props {
  productName: string;
  productCategory: string;
  productPrice: number;
  productRating: number;
  productRatingCount: number;
  productOverview?: string;
  productFeature?: FeatureProduct[];
}
const DetailContent = ({
  productName,
  productCategory,
  productPrice,
  productRating,
  productRatingCount,
  productOverview = fakeProductOverview,
  productFeature = fakeFeatureForProductData,
}: Props) => {
  //TODO: idea fetch detail info here to show stream content
  const theme = useTheme();
  const { isDesktop, isMobile } = useScreenWidth();
  const { isDarkMode } = useMode();

  return (
    <Grid
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderRadius: '8px',
        maxWidth: '1000px',
      }}
      display="flex"
      flexDirection="column"
      md={isDesktop ? undefined : 10}
      item
    >
      <Grid
        item
        sx={{
          padding: '16px',
        }}
        display="flex"
        flexDirection="column"
      >
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
        <Grid>
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

          <ImageDrawer
            image={isDarkMode ? ProductDetailDark : ProductDetailLight}
            alt="product detail"
          />

          <Grid
            container
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Grid item xs={12} lg={6}>
              <Grid
                display="flex"
                flexDirection="row"
                sx={{ marginTop: '32px', marginBottom: '12px' }}
              >
                <Chip
                  sx={{
                    borderRadius: '6px',
                    backgroundColor: themes.colors.yellow[600],
                    height: '32px',
                    width: '16px',
                  }}
                  variant="filled"
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.text.secondary,
                    marginLeft: '12px',
                  }}
                >
                  Overview
                </Typography>
              </Grid>
              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.secondary }}
              >
                {productOverview}
              </Typography>
            </Grid>

            {/* Product features */}
            <Grid item xs={12} lg={5}>
              <Grid
                display="flex"
                flexDirection="row"
                sx={{ marginTop: '32px', marginBottom: '12px' }}
              >
                <Chip
                  sx={{
                    borderRadius: '6px',
                    backgroundColor: themes.colors.violet[500],
                    height: '32px',
                    width: '16px',
                  }}
                  variant="filled"
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.text.secondary,
                    marginLeft: '12px',
                  }}
                >
                  Features
                </Typography>
              </Grid>

              {productFeature.map((item, index) => (
                <div key={index}>
                  <Grid display="flex" flexDirection="row">
                    <CheckIcon
                      sx={{
                        color: themes.colors.green[500],
                        marginRight: '12px',
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      {item.text}
                    </Typography>
                  </Grid>
                  <Divider
                    sx={{
                      marginTop: '12px',
                      marginBottom: '12px',
                      color: theme.palette.grey[100],
                    }}
                  />
                </div>
              ))}
            </Grid>
          </Grid>
          <Divider
            sx={{
              marginTop: '64px',
              marginBottom: '64px',
              color: theme.palette.grey[100],
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default memo(DetailContent);

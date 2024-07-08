'use client';

import { Suspense, memo } from 'react';

//mui
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';
import Divider from '@mui/material/Divider';

//components
import Header from '@/src/components/layouts/ProductDetail/Header';
import SocialInfo from '@/src/components/layouts/ProductDetail/SocialInfo';
import ProductDetailDark from '@/public/assets/ProductDetailImgDark.webp';
import ProductDetailLight from '@/public/assets/ProductDetailImgLight.webp';
import ImageDrawer from '@/src/components/ui/ImageDrawer';
import DetailContentSkeleton from '@/src/components/layouts/ProductDetail/DetailContent/DetailContentSkeleton';
import DetailContentWrapper from '@/src/components/layouts/ProductDetail/DetailContent/DetailContentWrapper';
import DetailOverviewWrapper from '@/src/components/layouts/ProductDetail/DetailOverview/DetailOverviewWrapper';
import DetailOverviewSkeleton from '@/src/components/layouts/ProductDetail/DetailOverview/DetailOverviewSkeleton';
import DetailFeatureSkeleton from '@/src/components/layouts/ProductDetail/DetailFeature/DetailFeatureSkeleton';
import DetailFeatureWrapper from '@/src/components/layouts/ProductDetail/DetailFeature/DetailFeatureWrapper';

//constants

//hooks
import useScreenWidth from '@/src/hooks/useScreenWidth';

//contexts
import { useMode } from '@/src/contexts/modeContext/useModeContext';

interface Props {
  productId: string;
}

const ProductDetail = ({ productId }: Props) => {
  const { isMobile, isDesktop } = useScreenWidth();
  const theme = useTheme();
  const { isDarkMode } = useMode();

  return (
    <Box>
      {/* Header */}
      <Header />
      <Grid
        container
        sx={{
          padding: '24px',
        }}
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid
          sx={{
            backgroundColor: theme.palette.background.paper,
            borderRadius: '8px',
            width: '1000px',
            padding: '16px',
          }}
          display="flex"
          flexDirection="column"
          md={isDesktop ? undefined : 10}
          item
        >
          <Suspense fallback={<DetailContentSkeleton />}>
            <DetailContentWrapper productId={productId} />
          </Suspense>
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
            <Suspense fallback={<DetailOverviewSkeleton />}>
              <DetailOverviewWrapper />
            </Suspense>

            <Suspense fallback={<DetailFeatureSkeleton />}>
              <DetailFeatureWrapper />
            </Suspense>
          </Grid>
          {/* Divider */}
          <Divider
            sx={{
              marginTop: '64px',
              marginBottom: '64px',
              color: theme.palette.grey[100],
            }}
          />
        </Grid>

        {!isMobile && <SocialInfo />}
      </Grid>
    </Box>
  );
};

export default memo(ProductDetail);

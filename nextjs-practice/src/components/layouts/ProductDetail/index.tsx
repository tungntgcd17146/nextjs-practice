import { Suspense } from 'react';

//mui
import Box from '@mui/material/Box';

//components
import ProductDetailLight from '@/public/assets/ProductDetailImgLight.webp';
import ImageDrawer from '@/src/components/ui/ImageDrawer';
import DetailContentSkeleton from '@/src/components/layouts/ProductDetail/DetailContent/DetailContentSkeleton';
import DetailContentWrapper from '@/src/components/layouts/ProductDetail/DetailContent/DetailContentWrapper';
import DetailOverviewWrapper from '@/src/components/layouts/ProductDetail/DetailOverview/DetailOverviewWrapper';
import DetailOverviewSkeleton from '@/src/components/layouts/ProductDetail/DetailOverview/DetailOverviewSkeleton';
import DetailFeatureSkeleton from '@/src/components/layouts/ProductDetail/DetailFeature/DetailFeatureSkeleton';
import DetailFeatureWrapper from '@/src/components/layouts/ProductDetail/DetailFeature/DetailFeatureWrapper';

interface Props {
  productId: string;
}

const ProductDetail = ({ productId }: Props) => {
  return (
    <>
      <Suspense fallback={<DetailContentSkeleton />}>
        <DetailContentWrapper productId={productId} />
      </Suspense>
      <ImageDrawer image={ProductDetailLight} alt="product detail" />
      <Box
        display="flex"
        sx={{
          flexDirection: {
            xs: 'column',
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
          },
        }}
        justifyContent="space-between"
      >
        <Suspense fallback={<DetailOverviewSkeleton />}>
          <DetailOverviewWrapper />
        </Suspense>

        <Suspense fallback={<DetailFeatureSkeleton />}>
          <DetailFeatureWrapper />
        </Suspense>
      </Box>
    </>
  );
};

export default ProductDetail;

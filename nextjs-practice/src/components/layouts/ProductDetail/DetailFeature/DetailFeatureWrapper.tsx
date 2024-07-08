//component
import DetailFeature from '@/src/components/layouts/ProductDetail/DetailFeature';

//services
import { fetchProductFeature } from '@/src/services/productsService';

export interface Props {}

const DetailOverviewWrapper = async () => {
  const { data: productFeatures } = await fetchProductFeature();

  return <DetailFeature productFeatures={productFeatures} />;
};

export default DetailOverviewWrapper;

//component
import DetailOverview from '@/src/components/layouts/ProductDetail/DetailOverview';

//services
import { fetchProductOverview } from '@/src/services/productsService';

const DetailOverviewWrapper = async () => {
  const { data: productOverviews } = await fetchProductOverview();

  return <DetailOverview productOverviews={productOverviews} />;
};

export default DetailOverviewWrapper;

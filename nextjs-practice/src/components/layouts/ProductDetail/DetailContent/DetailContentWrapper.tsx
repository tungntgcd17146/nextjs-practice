//component
import DetailContent from '@/src/components/layouts/ProductDetail/DetailContent';

//services
import { fetchProductById } from '@/src/services/productsService';

export interface Props {
  productId: string;
}
const DetailContentWrapper = async ({ productId }: Props) => {
  const { data: product } = await fetchProductById(productId);

  return <DetailContent product={product} />;
};

export default DetailContentWrapper;

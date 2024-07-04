import React from 'react';

//components
import ProductDetail from '@/src/components/layouts/ProductDetail';

//services
import { fetchProductById } from '@/src/services/productsService';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const { data: product } = await fetchProductById(id);

  return <ProductDetail product={product} />;
}

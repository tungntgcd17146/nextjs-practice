import React from 'react';

//components
import ProductDetail from '@/src/components/layouts/ProductDetail';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  return <ProductDetail productId={id} />;
}

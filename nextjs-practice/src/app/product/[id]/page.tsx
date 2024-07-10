import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Detail',
  description: 'Product Detail page, detail feature and overview of Product.',
  openGraph: {
    title: 'Product Detail',
    description: 'Product Detail page, detail feature and overview of Product.',
  },
};

//components
import ProductDetail from '@/src/components/layouts/ProductDetail';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  return <ProductDetail productId={id} />;
}

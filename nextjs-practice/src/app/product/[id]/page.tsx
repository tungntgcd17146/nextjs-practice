import React, { Suspense } from "react";

//components
import LoadingProgress from "@/src/components/ui/LoadingProgress";
import ProductDetail from "@/src/components/layouts/ProductDetail";

//services
import { fetchProductById } from "@/src/services/productsService";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const product = await fetchProductById(id);

  return (
    <Suspense fallback={<LoadingProgress />}>
      <ProductDetail product={product} />
    </Suspense>
  );
}

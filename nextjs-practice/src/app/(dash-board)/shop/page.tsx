import React, { Suspense } from "react";

//components
import Products from "@/src/components/layouts/Shop/ShopContent/Products";
import LoadingProgress from "@/src/components/ui/LoadingProgress";

//services
import { fetchProducts } from "@/src/services/productsService";

export default async function Page() {
  const products = await fetchProducts();

  return (
    <Suspense fallback={<LoadingProgress />}>
      <Products products={products} />
    </Suspense>
  );
}

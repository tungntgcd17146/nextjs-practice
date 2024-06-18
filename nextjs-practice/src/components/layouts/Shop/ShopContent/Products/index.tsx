"use client";

import { memo, useCallback } from "react";

//mui
import ProductCard from "@/src/components/ui/ProductCard";
import Grid from "@mui/material/Grid";

//helper
import useScreenWidth from "@/src/hooks/useScreenWidth";
import { Product } from "@/src/types/product";
import InfiniteScroll from "@/src/components/ui/InfiniteScroll";

import { useRouter } from "next/navigation";

export interface Props {
  products: Product[];
}
const Products = ({ products }: Props) => {
  const { matchedBreakpoint } = useScreenWidth({ down: "sm" });
  const router = useRouter();

  const handleClickViewCard = useCallback(
    (_e: React.SyntheticEvent, id: number) => {
      router.push(`/product/${id}`);
    },
    [router],
  );

  return (
    <InfiniteScroll
      isEmptyItem={products.length === 0}
      // isError={isProductsError}
      // isLoading={isProductsLoading}
      // onClickLoadMore={handleClickLoadMore}
      // isHiddenLoadMore={isHiddenLoadMore}
    >
      <Grid container={!matchedBreakpoint}>
        {products.map((product) => {
          const {
            productName,
            productCategory,
            productPrice,
            productRating,
            productRatingCount,
            id,
            popularity,
          } = product;

          return (
            <Grid key={id} sm={6} lg={4} item>
              <ProductCard
                id={id}
                productName={productName}
                productCategory={productCategory}
                productPrice={productPrice}
                productRating={productRating}
                productRatingCount={productRatingCount}
                popularity={popularity}
                onViewCard={handleClickViewCard}
              />
            </Grid>
          );
        })}
      </Grid>
    </InfiniteScroll>
  );
};

export default memo(Products);

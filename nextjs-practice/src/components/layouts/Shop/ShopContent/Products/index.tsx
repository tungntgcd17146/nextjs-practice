"use client";

import { memo, useCallback } from "react";

//mui
import ProductCard from "@/src/components/ui/ProductCard";
import Grid from "@mui/material/Grid";

//helper
import useScreenWidth from "@/src/hooks/useScreenWidth";
import { Product } from "@/src/types";
import InfiniteScroll from "@/src/components/ui/InfiniteScroll";

export interface Props {
  products: Product[];
}

const Products = () => {
  const products = [
    {
      id: 1,
      productName: "Product 1",
      productCategory: "Illustration",
      productPrice: 88,
      productRating: 4.9,
      productRatingCount: 1251,
      popularity: "Most recent",
      createdAt: "2022-01-10T12:00:00Z",
    },
    {
      id: 2,
      productName: "Product 2",
      productCategory: "Illustration",
      productPrice: 88,
      productRating: 4.9,
      productRatingCount: 1251,
      popularity: "Most recent",
      createdAt: "2022-01-10T12:00:00Z",
    },
  ];
  const { matchedBreakpoint } = useScreenWidth({ down: "sm" });

  const handleClickViewCard = useCallback(
    () =>
      //_e: React.SyntheticEvent, id: number
      {
        //navigate(`/product/${id}`);
      },
    [
      //navigate
    ],
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

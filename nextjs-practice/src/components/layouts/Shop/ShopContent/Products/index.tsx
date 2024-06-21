"use client";

import { memo, useCallback, useState, useMemo } from "react";

//mui
import ProductCard from "@/src/components/ui/ProductCard";
import Grid from "@mui/material/Grid";

//helper
import useScreenWidth from "@/src/hooks/useScreenWidth";
import { Product } from "@/src/types/product";
import InfiniteScroll from "@/src/components/ui/InfiniteScroll";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { PRODUCTS_PER_PAGE } from "@/src/constants/common";
import { fetchProducts } from "@/src/services/productsService";

export interface Props {
  products: Product[];
  totalCount: number;
  initPage: number;
}
const Products = ({
  products,
  initPage,
  totalCount: totalProducts,
}: Props) => {
  const [items, setItems] = useState(products);
  const [page, setPage] = useState(initPage);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(
    !(Math.ceil(totalProducts / PRODUCTS_PER_PAGE) === initPage),
  );

  const { matchedBreakpoint } = useScreenWidth({ down: "sm" });
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  //total pages
  const totalPages = useMemo(
    () => Math.ceil(totalProducts / PRODUCTS_PER_PAGE),
    [totalProducts],
  );

  const isNotFoundPage = useMemo(
    () => totalPages < initPage,
    [initPage, totalPages],
  );

  const generatePageURL = useCallback(
    (pageNumber: number | string) => {
      const params = new URLSearchParams(searchParams);
      params.set("page", pageNumber.toString());

      return `${pathname}?${params.toString()}`;
    },
    [pathname, searchParams],
  );

  const updateUrl = useCallback(
    (page: number | string) => {
      const newUrl = new URLSearchParams(searchParams.toString());
      newUrl.set("page", page.toString());

      //shallow routing for update url and not reload page
      window.history.pushState(null, "", `?${newUrl.toString()}`);
    },
    [searchParams],
  );

  const handleClickViewCard = useCallback(
    (_e: React.SyntheticEvent, id: number) => {
      router.push(`/product/${id}`);
    },
    [router],
  );

  const handleClickLoadMore = useCallback(async () => {
    setIsLoading(true);
    const nextPage = page + 1;

    try {
      const { data: newItems } = await fetchProducts({
        _page: nextPage,
        _limit: PRODUCTS_PER_PAGE,
      });

      setItems((prevItems) => [...prevItems, ...newItems]);
      setPage(nextPage);

      updateUrl(nextPage);

      if (totalPages === nextPage) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setIsLoading(false);
    }
  }, [page, totalPages, updateUrl]);

  const handleClickShowLess = () => {
    setItems(products);
    setPage(1);
    setHasMore(true);
    router.push(generatePageURL(1));
  };

  const isEmptyProducts = products.length === 0;

  return (
    <InfiniteScroll
      isEmptyItem={isEmptyProducts}
      isError={isNotFoundPage}
      isLoadingSkeleton={isLoading}
      isHiddenLoadMore={!hasMore}
      onClickShowLess={handleClickShowLess}
      onClickLoadMore={handleClickLoadMore}
    >
      <Grid container={!matchedBreakpoint}>
        {items.map((product) => {
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

'use client';

import { memo, useCallback, useState, useMemo, useEffect } from 'react';

//mui
import ProductCard from '@/src/components/ui/ProductCard';
import Grid from '@mui/material/Grid';

//components
import CardSkeleton from '@/src/components/ui/CardSkeleton';

//helper
import useScreenWidth from '@/src/hooks/useScreenWidth';
import { Product, ProductQueryParams } from '@/src/types/product';
import InfiniteScroll from '@/src/components/ui/InfiniteScroll';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';

import { PRODUCTS_PER_PAGE } from '@/src/constants/common';
import { fetchProducts } from '@/src/services/productsService';
import { useShopContext } from '@/src/contexts/shopContext/useShopContext';

export interface Props {
  products: Product[];
  totalCount: number;
  queryParams: ProductQueryParams;
}

const Products = ({
  products,
  queryParams,
  totalCount: totalProducts,
}: Props) => {
  const [items, setItems] = useState(products);
  const [page, setPage] = useState(queryParams._page);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(
    !(Math.ceil(totalProducts / PRODUCTS_PER_PAGE) === queryParams._page),
  );

  const { matchedBreakpoint } = useScreenWidth({ down: 'sm' });
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setShowingProducts, setTotalProducts } = useShopContext();

  useEffect(() => {
    setTotalProducts(totalProducts);
    setShowingProducts(products.length);
  }, [products.length, setShowingProducts, setTotalProducts, totalProducts]);

  //total pages
  const totalPages = useMemo(
    () => Math.ceil(totalProducts / PRODUCTS_PER_PAGE),
    [totalProducts],
  );

  const isNotFoundPage = useMemo(
    // not found page when _page in url is not equal to 1 and lager than total pages
    () => totalPages < queryParams._page && queryParams._page !== 1,
    [queryParams._page, totalPages],
  );

  const generatePageURL = useCallback(
    (pageNumber: number | string) => {
      const params = new URLSearchParams(searchParams);
      params.set('page', pageNumber.toString());

      return `${pathname}?${params.toString()}`;
    },
    [pathname, searchParams],
  );

  const updateUrl = useCallback(
    (page: number | string) => {
      const newUrl = new URLSearchParams(searchParams.toString());
      newUrl.set('page', page.toString());

      //shallow routing for update url and not reload page
      window.history.pushState(null, '', `?${newUrl.toString()}`);
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
        ...queryParams,
        _page: nextPage,
      });

      setItems((prevItems) => [...prevItems, ...newItems]);
      setShowingProducts((prevShowing) => prevShowing + newItems.length);
      setPage(nextPage);

      updateUrl(nextPage);

      if (totalPages === nextPage) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setIsLoading(false);
    }
  }, [page, queryParams, setShowingProducts, totalPages, updateUrl]);

  const handleClickShowLess = () => {
    setItems(products);
    setShowingProducts(products.length);
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
      isHiddenActionButton={totalPages === 1}
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
              {isLoading ? (
                <CardSkeleton />
              ) : (
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
              )}
            </Grid>
          );
        })}
      </Grid>
    </InfiniteScroll>
  );
};

export default memo(Products);

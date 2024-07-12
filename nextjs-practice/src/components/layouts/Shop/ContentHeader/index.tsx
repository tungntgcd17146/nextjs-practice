'use client';

import { memo, useCallback, useState, useMemo } from 'react';
import { Theme } from '@mui/material';

//MUI
import { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

//components
import Tabs from '@/src/components/ui/Tabs';
import Select from '@/src/components/ui/Select';
import IconButton from '@/src/components/ui/IconButton';
import ProductFilter from '@/src/components/forms/ProductFilter';

//utils
import { selectOption, sortBySelect } from '@/src/mocks/productFilter';
import { tabItems } from '@/src/mocks/shopTab';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { TabsNavigation, TabsValue } from '@/src/types/navigation';
import { useShopContext } from '@/src/contexts/shopContext/useShopContext';

import { FilterValue } from '@/src/types/product';
import { ShopSelect } from '@/src/types/shopFilter';

//constants
import { DEFAULT_RATING_VALUE } from '@/src/constants/filterModal';
import {
  MAX_PRICE_RANGE_QUERY_KEY,
  MIN_PRICE_RANGE_QUERY_KEY,
  PAGE_QUERY_KEY,
  POPULARITY_QUERY_KEY,
  RATING_QUERY_KEY,
  SEARCH_QUERY_KEY,
  SORT_BY_QUERY_KEY,
  CATEGORIES_QUERY_KEY,
} from '@/src/constants/queryKey';

const filterButtonStyles = (theme: Theme) => ({
  marginLeft: '16px',
  boxShadow: `0 0 0 2px ${theme.palette.text.primary} inset`,
  borderRadius: '8px',
  ':hover': {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.primary.main,
    borderColor: theme.palette.text.primary,
  },
});

const filterIcon = <FilterAltOutlinedIcon />;

const ContentHeader = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { totalProducts, showingProducts } = useShopContext();

  const selectedValueFromUrl = useMemo(
    () => searchParams.get(POPULARITY_QUERY_KEY) || selectOption[0].value,
    [searchParams],
  );

  //Tab state for init selected from route
  const tabSelected = useMemo(
    () =>
      pathname === TabsNavigation.PRODUCTS
        ? TabsValue.PRODUCTS
        : pathname === TabsNavigation.FOLLOWERS
        ? TabsValue.FOLLOWERS
        : pathname === TabsNavigation.FOLLOWING
        ? TabsValue.FOLLOWING
        : TabsValue.PRODUCTS,
    [pathname],
  );

  const setOrDeleteParam = (
    params: URLSearchParams,
    key: string,
    value: string,
    defaultValue?: string,
  ) => {
    //if value is not equal default value and value is not empty
    if (value && value !== defaultValue) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
  };

  const generateProductsFilterURL = useCallback(
    (formData: FilterValue) => {
      const {
        query,
        sortBy,
        categories,
        minPriceRange,
        maxPriceRange,
        rating,
      } = formData;

      const params = new URLSearchParams(searchParams);

      //reset to first page when filter is applied
      params.delete(PAGE_QUERY_KEY);

      // Set search query
      setOrDeleteParam(params, SEARCH_QUERY_KEY, query);

      // Set sort by query param
      setOrDeleteParam(params, SORT_BY_QUERY_KEY, sortBy, sortBySelect[0].name);

      // Set rating query param
      setOrDeleteParam(params, RATING_QUERY_KEY, rating, DEFAULT_RATING_VALUE);

      // Join categories array into a comma-separated string
      if (categories.length > 0) {
        params.set(CATEGORIES_QUERY_KEY, categories.join(','));
      } else {
        params.delete(CATEGORIES_QUERY_KEY);
      }

      const isDefaultRange =
        minPriceRange === 0 && maxPriceRange === minPriceRange;

      //delete min price value on search param when
      //minPriceRange is equal 0 (just set max value)
      //min and max values are equal by default = 0 (delete both)
      isDefaultRange || minPriceRange === 0
        ? params.delete(MIN_PRICE_RANGE_QUERY_KEY)
        : params.set(MIN_PRICE_RANGE_QUERY_KEY, minPriceRange.toString());

      //delete max price value on search param when
      //min and max value larger than 0 and min max value are equal (just set min value)
      //min and max values are equal by default = 0 (just set min value)
      maxPriceRange > 0 && minPriceRange !== maxPriceRange
        ? params.set(MAX_PRICE_RANGE_QUERY_KEY, maxPriceRange.toString())
        : params.delete(MAX_PRICE_RANGE_QUERY_KEY);

      return router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams],
  );

  const handleSelectFilterByPopularity = useCallback(
    (event: SelectChangeEvent) => {
      const params = new URLSearchParams(searchParams);
      const selectValue = event.target.value;

      //reset page query param
      params.delete(PAGE_QUERY_KEY);

      //not set popularity query param when select all option
      setOrDeleteParam(
        params,
        POPULARITY_QUERY_KEY,
        selectValue,
        ShopSelect.ALL,
      );

      router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams],
  );

  const handleClickFilterButton = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl((prevAnchorEl) =>
        prevAnchorEl ? null : event.currentTarget,
      );
    },
    [],
  );

  const handleCloseFilterModal = useCallback(
    (formData: FilterValue) => {
      generateProductsFilterURL(formData);
      setAnchorEl(null);
    },
    [generateProductsFilterURL],
  );

  const handleSubmitFilterModal = useCallback(
    (formData: FilterValue) => {
      generateProductsFilterURL(formData);
    },
    [generateProductsFilterURL],
  );

  const handleResetFilterModal = useCallback(() => {
    const params = new URLSearchParams(searchParams);

    //reset page query param and all other query params on filter modal
    params.delete(PAGE_QUERY_KEY);
    params.delete(SEARCH_QUERY_KEY);
    params.delete(SORT_BY_QUERY_KEY);
    params.delete(CATEGORIES_QUERY_KEY);
    params.delete(MIN_PRICE_RANGE_QUERY_KEY);
    params.delete(MAX_PRICE_RANGE_QUERY_KEY);
    params.delete(RATING_QUERY_KEY);

    router.push(`${pathname}?${params.toString()}`);
  }, [pathname, router, searchParams]);

  const isProductsTabs = tabSelected === TabsValue.PRODUCTS;

  return (
    <Grid
      container
      display="flex"
      sx={{ marginBottom: '32px' }}
      justifyContent="space-between"
    >
      <Grid sx={{ marginBottom: '16px' }} item xs={12} md={8}>
        <Tabs tabSelected={tabSelected} tabItems={tabItems} />
      </Grid>

      {isProductsTabs && (
        <Grid
          item
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          xs={12}
          md={4}
        >
          <Grid item xs={10}>
            <Select
              selectedValue={selectedValueFromUrl}
              options={selectOption}
              onChange={handleSelectFilterByPopularity}
            />
          </Grid>

          <Grid
            display="flex"
            justifyContent="center"
            alignItems="center"
            item
            xs={2}
          >
            <IconButton
              aria-label="filter-product-icon-button"
              data-testid="ProductFilter_IconButton"
              onClick={handleClickFilterButton}
              sx={filterButtonStyles}
              children={filterIcon}
            />
            <ProductFilter
              anchorEl={anchorEl}
              totalProducts={totalProducts}
              showingProducts={showingProducts}
              onReset={handleResetFilterModal}
              onSubmit={handleSubmitFilterModal}
              onCloseModal={handleCloseFilterModal}
            />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default memo(ContentHeader);

"use client";

import { memo, useCallback, useState } from "react";
import { Theme } from "@mui/material";

//MUI
import { SelectChangeEvent } from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

//components
import Tabs from "@/src/components/ui/Tabs";
import Select from "@/src/components/ui/Select";
import IconButton from "@/src/components/ui/IconButton";
import ProductFilter from "@/src/components/forms/ProductFilter";

//utils
import { selectOption, sortBySelect } from "@/src/mocks/productFilter";
import { tabItems } from "@/src/mocks/shopTab";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TabsNavigation, TabsValue } from "@/src/types/navigation";
import { useShopContext } from "@/src/contexts/shopContext/useShopContext";

import { FilterValue } from "@/src/types/product";
import { ShopSelect } from "@/src/types/shopFilter";

const filterButtonStyles = (theme: Theme) => ({
  marginLeft: "16px",
  boxShadow: `0 0 0 2px ${theme.palette.text.primary} inset`,
  borderRadius: "8px",
  ":hover": {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.primary.main,
    borderColor: theme.palette.text.primary,
  },
});

const filterIcon = <FilterAltOutlinedIcon />;

const ContentHeader = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { totalProducts, showingProducts } = useShopContext();

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  //Tab state for init selected from route
  const tabSelected =
    pathname === TabsNavigation.PRODUCTS
      ? TabsValue.PRODUCTS
      : pathname === TabsNavigation.FOLLOWERS
        ? TabsValue.FOLLOWERS
        : TabsValue.FOLLOWING;

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
      params.delete("page");
      query ? params.set("query", query) : params.delete("query");
      sortBy !== sortBySelect[0].name
        ? params.set("sortBy", sortBy)
        : params.delete("sortBy");

      // Join categories array into a comma-separated string
      if (categories.length > 0) {
        params.set("categories", categories.join(","));
      } else {
        params.delete("categories");
      }

      minPriceRange === 0 && maxPriceRange === minPriceRange
        ? params.delete("minPriceRange")
        : params.set("minPriceRange", minPriceRange.toString());

      maxPriceRange > 0 && minPriceRange !== maxPriceRange
        ? params.set("maxPriceRange", maxPriceRange.toString())
        : params.delete("maxPriceRange");

      Number(rating) > 1
        ? params.set("rating", rating)
        : params.delete("rating");

      return router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams],
  );

  const handleSelectFilterByPopularity = useCallback(
    (event: SelectChangeEvent) => {
      const params = new URLSearchParams(searchParams);
      const selectValue = event.target.value;

      //reset page query param
      params.delete("page");

      //not set popularity query param when select all option
      selectValue !== ShopSelect.ALL
        ? params.set("popularity", selectValue)
        : params.delete("popularity");

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

  const handleCloseFilterModal = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleSubmitFilterModal = useCallback(
    (formData: FilterValue) => {
      generateProductsFilterURL(formData);
    },
    [generateProductsFilterURL],
  );

  const handleResetFilterModal = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.delete("page");
    params.delete("query");
    params.delete("sortBy");
    params.delete("categories");
    params.delete("minPriceRange");
    params.delete("maxPriceRange");
    params.delete("rating");

    router.push(`${pathname}?${params.toString()}`);
  }, [pathname, router, searchParams]);

  const isProductsTabs = tabSelected === TabsValue.PRODUCTS;

  return (
    <Grid
      container
      display="flex"
      sx={{ marginBottom: "32px" }}
      justifyContent="space-between"
    >
      <Grid sx={{ marginBottom: "16px" }} item xs={12} md={8}>
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

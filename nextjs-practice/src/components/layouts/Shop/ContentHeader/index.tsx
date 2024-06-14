"use client";

import { memo, useCallback, useState } from "react";
import { Theme } from "@mui/material";

//MUI
//import { SelectChangeEvent } from '@mui/material/Select'
import Grid from "@mui/material/Grid";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

//components
import Tabs from "@/src/components/ui/Tabs";
import Select from "@/src/components/ui/Select";
import IconButton from "@/src/components/ui/IconButton";
import ProductFilter from "@/src/components/forms/ProductFilter";

//utils
import { selectOption, tabItems } from "@/src/constants/data";
import { usePathname } from "next/navigation";
import { TabsNavigation, TabsValue } from "@/src/types";

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

  const pathname = usePathname();

  //Tab state for init selected from route
  const tabSelected =
    pathname === TabsNavigation.PRODUCTS
      ? TabsValue.PRODUCTS
      : pathname === TabsNavigation.FOLLOWERS
        ? TabsValue.FOLLOWERS
        : TabsValue.FOLLOWING;

  const handleSelectFilterByPopularity = useCallback(
    () =>
      //event: SelectChangeEvent
      {
        // const selectValue = event.target.value
        // setPopularitySelect(selectValue)
        // setPage(1)
        // //not set popularity query param when select all option
        // if (selectValue === ShopSelect.ALL) {
        //   setProductsQueryParam({ ...productsQueryParam, popularity: undefined, _page: 1, _limit: 6 })
        // } else {
        //   setProductsQueryParam({
        //     ...productsQueryParam,
        //     popularity: selectValue,
        //     _page: 1,
        //     _limit: 6
        //   })
        // }
      },
    [
      //productsQueryParam
    ],
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
              // totalProducts={totalProducts}
              // showingProducts={showingProducts}
              // onReset={handleResetFilterModal}
              // onSubmit={handleSubmitFilterModal}
              onCloseModal={handleCloseFilterModal}
            />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default memo(ContentHeader);

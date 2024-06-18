import { memo, useCallback, useEffect, useState } from "react";

//mui
import Popover from "@mui/material/Popover";
import { SelectChangeEvent, useTheme } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Grid from "@mui/material/Grid";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import Checkboxes from "@/src/components/ui/Checkboxes";

//components
import Input from "@/src/components/ui/Input";
import FilterModalHeader from "./Header";
import Select from "@/src/components/ui/Select";
import RangeSlider from "@/src/components/ui/RangeSlider";
import Button from "@/src/components/ui/Button";
import SearchIcon from "@mui/icons-material/Search";

//utils
import useScreenWidth from "@/src/hooks/useScreenWidth";
import { themes } from "@/src/themes";
import { Checkbox as CheckboxType } from "@/src/types/checkbox";
import {
  checkboxOptions,
  ratingSelect,
  sortBySelect,
} from "@/src/mocks/productFilter";

export interface FilterValue {
  searchInput: string;
  sortBy: string;
  categories: string[];
  minPriceRange: number;
  maxPriceRange: number;
  rating: string;
}
export interface Props {
  onSubmit?: (filterValue: FilterValue) => void;
  onReset?: () => void;
  totalProducts?: number;
  showingProducts?: number;
  onCloseModal?: () => void;
  anchorEl: HTMLElement | null;
}

const applyButtonStyles = { marginLeft: "16px" };
const selectStyles = { height: "100%" };
const iconHelperSelectStyles = { color: themes.colors.red[500] };
const commonMarginBottom = { marginBottom: "24px" };

const startIcon = <FavoriteOutlinedIcon sx={iconHelperSelectStyles} />;

const ProductFilter = ({
  anchorEl,
  onReset,
  onSubmit,
  onCloseModal,
  totalProducts = 0,
  showingProducts = 0,
}: Props) => {
  const [categoryChecked, setCategoryChecked] =
    useState<CheckboxType[]>(checkboxOptions);

  const [searchInput, setSearchInput] = useState("");
  const [categoryValue, setCategoryValue] = useState<string[]>([]);
  const [selectedSortByValue, setSelectedSortByValue] = useState(
    sortBySelect[0].value,
  );
  const [selectedRatingValue, setSelectedRatingValue] = useState(
    ratingSelect[0].value,
  );
  const [rangeSlideMinValue, setRangeSlideMinValue] = useState(0);
  const [rangeSlideMaxValue, setRangeSlideMaxValue] = useState(0);

  const [isDisableActionButton, setIsDisableActionButton] = useState(true);

  //disable apply and reset button when all value is default
  const theme = useTheme();
  const { isMobile } = useScreenWidth();

  useEffect(() => {
    //when all value is default disable apply button
    setIsDisableActionButton(
      searchInput === "" &&
        categoryValue.length === 0 &&
        selectedSortByValue === sortBySelect[0].value &&
        selectedRatingValue === ratingSelect[0].value &&
        rangeSlideMinValue === 0 &&
        rangeSlideMaxValue === 0,
    );
  }, [
    searchInput,
    categoryValue,
    selectedSortByValue,
    selectedRatingValue,
    rangeSlideMinValue,
    rangeSlideMaxValue,
  ]);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const handleReset = useCallback(() => {
    setSearchInput("");
    setSelectedSortByValue(sortBySelect[0].value);
    setSelectedRatingValue(ratingSelect[0].value);
    setRangeSlideMinValue(0);
    setRangeSlideMaxValue(0);
    setCategoryValue([]);

    setCategoryChecked(checkboxOptions);

    onReset?.();
  }, [onReset]);

  const handleApply = useCallback(() => {
    const filterApplyValue = {
      searchInput: searchInput,
      categories: categoryValue,
      sortBy: selectedSortByValue,
      minPriceRange: rangeSlideMinValue,
      maxPriceRange: rangeSlideMaxValue,
      rating: selectedRatingValue,
    };

    onSubmit?.(filterApplyValue);
    onCloseModal?.();
  }, [
    categoryValue,
    onCloseModal,
    onSubmit,
    rangeSlideMaxValue,
    rangeSlideMinValue,
    searchInput,
    selectedRatingValue,
    selectedSortByValue,
  ]);

  const handleSelectRatingChange = useCallback((value: SelectChangeEvent) => {
    setSelectedRatingValue(value.target.value);
  }, []);

  const handleCheckboxChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const isChecked = event.target.checked;

      if (isChecked) {
        setCategoryValue([...categoryValue, value]);
      } else {
        const newValue = categoryValue.filter((category) => category !== value);
        setCategoryValue(newValue);
      }

      setCategoryChecked((prevOptions) =>
        prevOptions.map((option) =>
          option.label === value
            ? { ...option, isChecked: !option.isChecked }
            : option,
        ),
      );
    },
    [categoryValue],
  );

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(event.target.value);
    },
    [],
  );

  const handleSelectSortByChange = useCallback((event: SelectChangeEvent) => {
    setSelectedSortByValue(event.target.value);
  }, []);

  const handleRangeSliderChange = useCallback((value: number[]) => {
    setRangeSlideMinValue(value[0]); //min value
    setRangeSlideMaxValue(value[1]); //max value
  }, []);

  return (
    <div>
      <Backdrop
        sx={{
          color: themes.colors.white[500],
          zIndex: theme.zIndex.drawer + 1,
        }}
        open={open}
        onClick={onCloseModal}
      />
      <Popover
        data-testid="ProductFilter_Popover"
        slotProps={{
          paper: {
            sx: isMobile
              ? {
                  width: "100%",
                  height: "100%",
                  top: "0px !important",
                  left: "0px !important",
                }
              : { borderRadius: "16px" },
          },
        }}
        id={id}
        open={open}
        anchorEl={isMobile ? null : anchorEl}
        onClose={onCloseModal}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Grid
          container
          sx={{ padding: "24px" }}
          display="flex"
          flexDirection="column"
        >
          {/* Header */}
          <FilterModalHeader
            totalProduct={totalProducts}
            showingProduct={showingProducts}
            onClickHeaderButton={onCloseModal}
          />

          <Input
            startIcon={<SearchIcon />}
            sx={commonMarginBottom}
            value={searchInput}
            placeholder="Search for products"
            onChange={handleSearch}
          />

          <Select
            wrapperStyle={commonMarginBottom}
            label="Sort by"
            selectedValue={selectedSortByValue}
            onChange={handleSelectSortByChange}
            sx={selectStyles}
            options={sortBySelect}
          />

          <Checkboxes
            wrapperStyles={commonMarginBottom}
            label="Showing"
            onChange={handleCheckboxChange}
            checkboxOptions={categoryChecked}
          />

          <RangeSlider
            wrapperStyles={commonMarginBottom}
            label="Price"
            startValue={rangeSlideMinValue}
            endValue={rangeSlideMaxValue}
            onChangeValue={handleRangeSliderChange}
          />

          <Select
            wrapperStyle={commonMarginBottom}
            label="Rating"
            selectedValue={selectedRatingValue}
            onChange={handleSelectRatingChange}
            startIcon={startIcon}
            sx={selectStyles}
            options={ratingSelect}
          />

          <Grid
            item
            sx={{ marginBottom: "24px" }}
            justifyContent="flex-end"
            display="flex"
          >
            <Button
              aria-label="close-reset"
              children={isDisableActionButton ? "Close" : "Reset"}
              color="inherit"
              onClick={isDisableActionButton ? onCloseModal : handleReset}
            />
            <Button
              aria-label="apply-button"
              children="Apply"
              color="primary"
              sx={applyButtonStyles}
              onClick={handleApply}
              disabled={isDisableActionButton}
            />
          </Grid>
        </Grid>
      </Popover>
    </div>
  );
};

export default memo(ProductFilter);

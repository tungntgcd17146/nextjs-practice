import * as React from "react";
import { memo } from "react";
import { Theme } from "@mui/material";
import { themes } from "@/src/themes";

//mui
import Typography from "@mui/material/Typography";
import Slider, { SliderProps } from "@mui/material/Slider";
import Box from "@mui/material/Box";

export interface Props extends SliderProps {
  valueLabelFormat?: (value: number) => string;
  min?: number;
  max?: number;
  onChangeValue?: (value: number[]) => void;
  label?: string;
  wrapperStyles?: React.CSSProperties;
  startValue?: number;
  endValue?: number;
}
export const valuetext = (value: number) => {
  return `$${value}`;
};

const sliderStyles = (theme: Theme) => ({
  "& .MuiSlider-thumb": {
    border: `2px solid ${themes.colors.blue[600]}`,
    color: themes.colors.white[600],
  },
  "& .MuiSlider-track": {
    color: themes.colors.blue[600],
  },
  color: theme.palette.grey[100],
  minWidth: 200,
});

const RangeSlider = ({
  label,
  valueLabelFormat = valuetext,
  min = 0,
  max = 100,
  onChangeValue,
  wrapperStyles,
  startValue = 0,
  endValue = 0,
  ...rest
}: Props) => {
  const handleChange = (_event: Event, newValue: number | number[]) => {
    onChangeValue?.(newValue as number[]);
  };

  const rangeValue = React.useMemo(
    () => [startValue, endValue],
    [startValue, endValue],
  );

  return (
    <Box sx={wrapperStyles}>
      {label && (
        <Typography variant="body1" sx={{ marginBottom: "8px" }}>
          {label}
        </Typography>
      )}
      <Slider
        data-testid="RangeSlider"
        sx={sliderStyles}
        min={min}
        max={max}
        value={rangeValue}
        onChange={handleChange}
        valueLabelDisplay="auto"
        valueLabelFormat={valueLabelFormat}
        {...rest}
      />
    </Box>
  );
};

export default memo(RangeSlider);

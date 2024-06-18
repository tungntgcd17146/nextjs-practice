import { memo } from "react";

import { InputBaseProps, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";

import IconButton from "@/src/components/ui/IconButton";

export interface Props extends InputBaseProps {
  startIcon?: React.ReactNode;
  endHelper?: React.ReactNode;
  searchWidth?: string;
  onClickEndHelper?: (event: React.MouseEvent<HTMLElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  containerStyles?: React.CSSProperties;
  startIconStyles?: React.CSSProperties;
}

const defaultStartIconStyles = {
  position: "absolute",
  left: "4px",
  top: "4px",
};

const Input = ({
  startIconStyles,
  startIcon,
  endHelper,
  onClickEndHelper,
  onChange,
  searchWidth = "100%",
  sx,
  containerStyles,
  ...rest
}: Props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.grey[100],
        color: theme.palette.text.secondary,
        borderRadius: "12px",
        height: "48px",
        paddingLeft: "42px",
        paddingRight: "68px",
        position: "relative",
        width: searchWidth,
        ...containerStyles,
      }}
    >
      {startIcon && (
        <IconButton
          aria-label="search"
          data-testid="SearchInput_SearchIcon"
          children={startIcon}
          sx={{ ...defaultStartIconStyles, ...startIconStyles }}
        />
      )}
      <InputBase
        required
        onChange={onChange}
        data-testid="SearchInput_InputBase"
        sx={{ width: "100%", height: "100%", fontSize: "15px", ...sx }}
        {...rest}
      />
      {endHelper && (
        <div
          data-testid="SearchInput_EndHelper"
          onClick={onClickEndHelper}
          style={{
            fontSize: "16px",
            backgroundColor: theme.palette.grey[200],
            color: theme.palette.text.secondary,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            position: "absolute",
            right: "0.5rem",
            top: "0.5rem",
            width: "56px",
            height: "32px",
            borderRadius: "8px",
          }}
        >
          {endHelper}
        </div>
      )}
    </Box>
  );
};

export default memo(Input);

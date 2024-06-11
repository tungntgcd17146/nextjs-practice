import { memo, useMemo } from "react";
import SearchIcon from "@mui/icons-material/Search";

import { InputBaseProps, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import IconButton from "@/src/components/ui/IconButton";

export interface Props extends InputBaseProps {
  endHelper?: React.ReactNode;
  searchWidth?: string;
  onClickEndHelper?: (event: React.MouseEvent<HTMLElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  wrapperStyle?: React.CSSProperties;
}

const searchIconStyles = { position: "absolute", left: "4px", top: "4px" };

const SearchInput = ({
  endHelper,
  onClickEndHelper,
  onChange,
  searchWidth = "100%",
  wrapperStyle,
  ...rest
}: Props) => {
  const theme = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.palette.grey[100],
        color: theme.palette.text.secondary,
        borderRadius: "12px",
        height: "48px",
        paddingLeft: "42px",
        paddingRight: "68px",
        position: "relative",
        width: searchWidth,
        ...wrapperStyle,
      }}
    >
      <IconButton
        aria-label="search"
        data-testid="SearchInput_SearchIcon"
        children={useMemo(
          () => (
            <SearchIcon />
          ),
          [],
        )}
        sx={searchIconStyles}
      />
      <InputBase
        onChange={onChange}
        data-testid="SearchInput_InputBase"
        sx={{ width: "100%", height: "100%", fontSize: "15px" }}
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
    </div>
  );
};

export default memo(SearchInput);

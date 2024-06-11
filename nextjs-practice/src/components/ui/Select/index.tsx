import { memo } from "react";

//mui
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select as MuiSelect, SelectChangeEvent } from "@mui/material/";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import IconButton from "@/src/components/ui/IconButton";

interface SelectOption {
  id: string;
  name?: string;
  value: string;
}
export interface Props {
  options: SelectOption[];
  onChange?: (event: SelectChangeEvent) => void;
  sx?: React.CSSProperties;
  startIcon?: React.ReactNode;
  selectedValue?: string;
  label?: string;
  wrapperStyle?: React.CSSProperties;
}

const startIconStyles = { position: "absolute", left: "10px" };

const Select = ({
  options = [],
  startIcon,
  sx,
  onChange,
  selectedValue,
  label,
  wrapperStyle,
}: Props) => {
  const theme = useTheme();
  const handleChange = (event: SelectChangeEvent) => {
    onChange?.(event);
  };

  return (
    <Box sx={{ minWidth: 120, ...wrapperStyle }}>
      {label && (
        <Typography variant="body1" sx={{ marginBottom: "8px" }}>
          {label}
        </Typography>
      )}
      <FormControl
        size="small"
        fullWidth
        sx={{ m: 1, minHeight: 40, minWidth: 100, position: "relative" }}
      >
        {!!startIcon && (
          <IconButton
            aria-label="start-icon"
            children={startIcon}
            sx={startIconStyles}
          />
        )}
        <MuiSelect
          data-testid="Select"
          value={selectedValue}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderRadius: "12px",
            },
            ...sx,
          }}
          MenuProps={{
            PaperProps: {
              "data-testid": "Select_Menu_Paper",
              sx: {
                borderRadius: "12px",
                backgroundColor: theme.palette.background.default,
              },
            },
          }}
          defaultValue={options[0].value}
          onChange={handleChange}
          displayEmpty
          inputProps={{
            "aria-label": "Without label",
            sx: { marginLeft: startIcon ? "50px" : 0 },
          }}
        >
          {options?.map((item) => {
            const { id, name, value } = item;
            return (
              <MenuItem
                data-testid="Select_MenuItem"
                sx={{
                  "&.Mui-selected": {
                    color: theme.palette.info.main,
                    backgroundColor: "unset",
                  },
                }}
                key={id}
                value={value}
              >
                {name}
              </MenuItem>
            );
          })}
        </MuiSelect>
      </FormControl>
    </Box>
  );
};

export default memo(Select);

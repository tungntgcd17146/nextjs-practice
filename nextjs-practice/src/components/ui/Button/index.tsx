import { memo } from "react";

import { ButtonProps, Button as MuiButton, useTheme } from "@mui/material";

export interface Props extends ButtonProps {
  children?: React.ReactNode;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  sx?: React.CSSProperties;
  disabled?: boolean;
  color: "inherit" | "primary" | "success";

  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({
  children,
  color = "primary",
  endIcon,
  startIcon,
  size = "medium",
  type = "button",
  sx,
  disabled,

  onClick,
  ...rest
}: Props) => {
  const theme = useTheme();

  const getColor = (color?: string) => {
    const { palette } = theme;

    switch (color) {
      //Default button for dark/light mode
      case "inherit":
        return {
          backgroundColor: palette.background.paper,
          color: palette.text.secondary,
          "&:hover": {
            borderColor: palette.text.secondary,
          },
        };

      //blue button
      case "primary":
        return {
          backgroundColor: palette.info.main,
          color: palette.primary.main,
          "&:hover": {
            borderColor: palette.info.dark,
            backgroundColor: palette.info.dark,
          },
        };

      //button active
      case "success":
        return {
          backgroundColor: palette.grey[100],
          color: palette.text.secondary,
        };
    }
  };

  const getSize = (size?: string) => {
    switch (size) {
      case "small":
        return {
          borderRadius: "8px",
          padding: "8px 16px",
        };
      case "medium":
        return {
          borderRadius: "12px",
          padding: "12px 20px",
        };
    }
  };

  const commonStyle = {
    minWidth: "100px",
    fontWeight: 700,
    height: "48px",
    lineHeight: "20px",
    border: `2px solid ${theme.palette.grey[100]}`,
    ":disabled": {
      opacity: 0.5,
      pointerEvents: "none",
    },
  };

  return (
    <MuiButton
      data-testid="Button"
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      type={type}
      sx={{
        ...commonStyle,
        ...getColor(color),
        ...getSize(size),
        ...sx,
      }}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};

export default memo(Button);

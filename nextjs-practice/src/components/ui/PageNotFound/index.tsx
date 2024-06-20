"use client";

import { memo, useCallback } from "react";

//component
import Button from "@/src/components/ui/Button";

//mui
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { themes } from "@/src/themes";
import useScreenWidth from "@/src/hooks/useScreenWidth";

import { useRouter } from "next/navigation";

export interface Props {
  headerContent?: string;
  body?: string;
  footer?: string;
  isBrowserError?: boolean;
  sx?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  actionButtonName?: string;
  isHiddenActionButton?: boolean;
}
const NotFoundPage = ({
  headerContent = "404",
  body,
  footer,
  isBrowserError = false,
  sx,
  onClick,
  actionButtonName = "Back to Home",
  isHiddenActionButton = false,
}: Props) => {
  const { isTablet, isDesktop } = useScreenWidth();
  const router = useRouter();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (onClick) {
        onClick?.(e);
      }
      router.push("/shop");
    },

    [onClick, router],
  );

  return (
    <Grid
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        textAlign: "center",
        marginTop: "100px",
        marginBottom: "100px",
        marginLeft:
          !isBrowserError && isTablet
            ? "80px"
            : !isBrowserError && isDesktop
              ? "330px"
              : "0px",
        ...sx,
      }}
    >
      <Typography
        sx={{
          height: "100px",
          width: "200px",
          borderRadius: "12px",
          backgroundColor: themes.colors.red[500],
          fontSize: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        variant="h1"
        color="primary"
        gutterBottom
      >
        {headerContent}
      </Typography>
      {body && (
        <Typography variant="h2" color="textSecondary" paragraph>
          {body}
        </Typography>
      )}
      {footer && (
        <Typography variant="body1" color="textSecondary" paragraph>
          {footer}
        </Typography>
      )}
      {!isHiddenActionButton && (
        <Button
          aria-label="action-button"
          data-testid="NotFoundPage_Button"
          onClick={handleClick}
          variant="outlined"
          color="inherit"
        >
          {actionButtonName}
        </Button>
      )}
    </Grid>
  );
};

export default memo(NotFoundPage);

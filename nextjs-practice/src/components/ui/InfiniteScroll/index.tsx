import React, { memo, useCallback } from "react";

import Button from "@/src/components/ui/Button";
import PageNotFound from "@/src/components/ui/PageNotFound";

//mui
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export interface Props {
  maxHeight?: string;
  children?: React.ReactNode;
  isLoadingSkeleton?: boolean;
  isError?: boolean;
  isEmptyItem?: boolean;
  isHiddenLoadMore?: boolean;
  isHiddenActionButton?: boolean;
  onClickLoadMore?: () => void;
  onClickShowLess?: () => void;
}

const InfiniteScroll = ({
  maxHeight = "auto",
  children,
  isLoadingSkeleton,
  isError,
  isEmptyItem,
  onClickLoadMore,
  onClickShowLess,
  isHiddenLoadMore = false,
  isHiddenActionButton = false,
}: Props) => {
  const handleClickLoadMore = useCallback(() => {
    onClickLoadMore?.();
  }, [onClickLoadMore]);

  if (isError) {
    return (
      <PageNotFound
        isBrowserError
        headerContent="Opp!"
        body="Not found page!"
      />
    );
  }

  if (isEmptyItem) {
    return (
      <PageNotFound
        isHiddenActionButton
        isBrowserError
        headerContent="Opp!"
        body="No item found"
      />
    );
  }

  return (
    <Box
      sx={{
        overflowY: "auto",
        maxHeight: maxHeight,
        width: "100%",
        scrollbarColor: "dark",
        scrollbarWidth: "thin",
      }}
    >
      <Box sx={{ opacity: isLoadingSkeleton ? 0.3 : 1 }}>{children}</Box>

      {!isHiddenActionButton &&
        (!isHiddenLoadMore ? (
          <Grid xs={12} sx={{ textAlign: "center", marginTop: "24px" }} item>
            <Button
              disabled={isLoadingSkeleton}
              aria-label="load-more"
              data-testid="InfiniteScroll_LoadMoreButton"
              children={isLoadingSkeleton ? "Loading..." : "Load more"}
              color="inherit"
              size="small"
              onClick={handleClickLoadMore}
            />
          </Grid>
        ) : (
          <Grid xs={12} sx={{ textAlign: "center", marginTop: "24px" }} item>
            <Button
              disabled={isLoadingSkeleton}
              aria-label="load-more"
              data-testid="InfiniteScroll_LoadMoreButton"
              children={isLoadingSkeleton ? "Loading..." : "Show less"}
              color="inherit"
              size="small"
              onClick={onClickShowLess}
            />
          </Grid>
        ))}
    </Box>
  );
};

export default memo(InfiniteScroll);

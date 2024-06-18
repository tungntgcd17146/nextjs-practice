import React, { memo, useCallback } from "react";

import Button from "@/src/components/ui/Button";
import Loading from "@/src/components/ui/LoadingProgress";
import PageNotFound from "@/src/components/ui/PageNotFound";

//mui
import Grid from "@mui/material/Grid";

export interface Props {
  maxHeight?: string;
  children?: React.ReactNode;
  isLoading?: boolean;
  isError?: boolean;
  isEmptyItem?: boolean;
  isHiddenLoadMore?: boolean;
  onClickLoadMore?: () => void;
}

const InfiniteScroll = ({
  maxHeight = "auto",
  children,
  isLoading,
  isError,
  isEmptyItem,
  onClickLoadMore,
  isHiddenLoadMore = false,
}: Props) => {
  const handleClickLoadMore = useCallback(() => {
    onClickLoadMore?.();
  }, [onClickLoadMore]);

  if (isLoading) {
    return <Loading dataTestId="InfiniteScroll_Loading" />;
  }

  if (isError) {
    return (
      <PageNotFound isBrowserError headerContent="Opp!" body="Error page" />
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
    <div
      style={{
        overflowY: "auto",
        maxHeight: maxHeight,
        width: "100%",
        scrollbarColor: "dark",
        scrollbarWidth: "thin",
      }}
    >
      {children}

      {!isHiddenLoadMore && (
        <Grid xs={12} sx={{ textAlign: "center", marginTop: "24px" }} item>
          <Button
            aria-label="load-more"
            data-testid="InfiniteScroll_LoadMoreButton"
            children="Load more"
            color="inherit"
            size="small"
            onClick={handleClickLoadMore}
          />
        </Grid>
      )}
    </div>
  );
};

export default memo(InfiniteScroll);

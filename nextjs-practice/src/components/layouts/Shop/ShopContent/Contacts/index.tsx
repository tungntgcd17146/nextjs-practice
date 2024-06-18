"use client";

import { memo } from "react";

//mui
import Grid from "@mui/material/Grid";

//components
import ContactItem from "@/src/components/ui/ContactItem";
import InfiniteScroll from "@/src/components/ui/InfiniteScroll";
import PageNotFound from "@/src/components/ui/PageNotFound";

//helper
import useScreenWidth from "@/src/hooks/useScreenWidth";

import { contacts } from "@/src/mocks/commonData";

const Contacts = () => {
  const { matchedBreakpoint } = useScreenWidth({ down: "sm" });

  if (!contacts)
    return (
      <PageNotFound isBrowserError headerContent="Opp!" body="No item found" />
    );

  return (
    <InfiniteScroll
      // isLoading={isLoading}
      // isError={isError}
      isEmptyItem={contacts.length === 0}
      isHiddenLoadMore
    >
      <Grid container={!matchedBreakpoint}>
        {contacts.map((contactItem) => {
          return (
            <Grid key={contactItem.id} xs={12} item>
              <ContactItem user={contactItem} />
            </Grid>
          );
        })}
      </Grid>
    </InfiniteScroll>
  );
};

export default memo(Contacts);

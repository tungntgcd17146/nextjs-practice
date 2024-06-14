"use client"

import { memo } from "react";

//mui
import Grid from "@mui/material/Grid";

//components
// import ProductCard from '@/components/ProductCard'
import ContactItem from "@/src/components/ui/ContactItem";

//helper
import useScreenWidth from "@/src/hooks/useScreenWidth";
import InfiniteScroll from "@/src/components/ui/InfiniteScroll";
import PageNotFound from "@/src/components/ui/PageNotFound";
import { UserContact } from "@/src/types";

export type ContactQuery = "following" | "followers";

const contacts: UserContact[] = [
  {
    id: 1,
    userName: "Tung Nguyen",
    productNumber: 1,
    followerNumber: 1,
    contactStatus: "following",
  },
  {
    id: 2,
    userName: "Chelsie Haley",
    productNumber: 1,
    followerNumber: 1,
    contactStatus: "following",
  },
  {
    id: 3,
    userName: "Tung Nguyen",
    productNumber: 1,
    followerNumber: 1,
    contactStatus: "following",
  },
];

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

"use client";

import { themes } from "@/src/themes";

//mui
import Grid from "@mui/material/Grid";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";

//components
import IconButton from "@/src/components/ui/IconButton";
import Button from "@/src/components/ui/Button";
import Avatar from "@/src/components/ui/Avatar";
import User1 from "@/public/assets/User1.webp";
import Figma from "@/public/assets/figma.webp";

//constants
import DetailContent from "./DetailContent";
import { BASE_REDIRECT_URL } from "@/src/constants/common";

//types
import { Product } from "@/src/types/product";

import { useRouter } from "next/navigation";

import useScreenWidth from "@/src/hooks/useScreenWidth";

interface Props {
  product: Product;
}

const ProductDetail = ({ product }: Props) => {
  const router = useRouter();
  const theme = useTheme();
  const { isMobile } = useScreenWidth();

  const handleClose = () => {
    router.push(BASE_REDIRECT_URL);
  };

  const {
    productName,
    productCategory,
    productPrice,
    productRating,
    productRatingCount,
  } = product;

  return (
    <Box>
      {/* Header */}
      <Grid
        item
        sx={{ margin: "24px 42px" }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Button
          aria-label="edit-product"
          data-testid="ProductDetail_EditButton"
          children="Edit product"
          color="inherit"
        />

        <IconButton
          aria-label="detail-product-close"
          children={<CloseOutlinedIcon />}
          onClick={handleClose}
          data-testid="ProductDetail_CloseIconButton"
          sx={{
            borderRadius: "50%",
            backgroundColor: theme.palette.grey[100],
          }}
        />
      </Grid>
      <Grid
        container
        sx={{
          padding: "24px",
        }}
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <DetailContent
          {...{
            productName,
            productCategory,
            productPrice,
            productRating,
            productRatingCount,
          }}
        />

        {!isMobile && (
          <Grid
            sx={{ marginLeft: "24px" }}
            display="flex"
            flexDirection="column"
            item
          >
            <Avatar
              sx={{ marginBottom: "24px" }}
              avtBackground={themes.colors.yellow[500]}
              imgNextSrc={User1}
              alt={"User1"}
              size="medium"
            />
            <Avatar
              sx={{
                marginBottom: "24px",
                backgroundColor: theme.palette.grey[300],
                "& .MuiAvatar-img": {
                  width: "20px",
                  height: "32px",
                },
              }}
              badgeSx={
                {
                  "& .MuiBadge-badge": {
                    backgroundColor: theme.palette.text.secondary,
                    color: theme.palette.background.paper,
                    border: "unset",
                  },
                } as React.CSSProperties
              }
              imgWidth={20}
              imgHeight={32}
              badgeAnchorOrigin={{ vertical: "top", horizontal: "left" }}
              BadgeIcon="3"
              avtBackground={theme.palette.grey[200]}
              imgNextSrc={Figma}
              alt="Figma"
              size="medium"
            />
            <IconButton
              aria-label="like-product"
              sx={{
                backgroundColor: theme.palette.grey[300],
                borderRadius: "50%",
                width: "64px",
                height: "64px",
                alignItems: "center",
                ":hover": {
                  backgroundColor: "none",
                },
              }}
              children={<FavoriteOutlinedIcon />}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default ProductDetail;

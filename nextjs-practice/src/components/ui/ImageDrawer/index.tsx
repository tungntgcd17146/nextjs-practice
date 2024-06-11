import React, { memo, useState } from "react";
import { Modal, Fade } from "@mui/material";

import LightProductDetail from "@/public/assets/ProductDetailImgLight.webp";
import useScreenWidth from "@/src/hooks/useScreenWidth";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Props {
  image: string | StaticImport;
  alt: string;
}

const ImageDrawer = ({
  image = LightProductDetail,
  alt = "Product Detail",
}: Props) => {
  const [open, setOpen] = useState(false);

  const { matchedBreakpoint } = useScreenWidth({ down: "lg" });

  const handleClose = () => {
    setOpen(false);
  };

  const handleImage = () => {
    setOpen(true);
  };

  return (
    <>
      <Image
        data-testid="ImageDrawer_Img"
        src={image}
        alt={alt}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          e.stopPropagation();
          handleImage();
        }}
        width={500}
        height={500}
        style={{
          cursor: "pointer",
          width: "100%",
          maxHeight: "70%",
          borderRadius: "12px",
        }}
      />
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Fade in={open} timeout={500}>
          <Image
            width={1000}
            height={1000}
            data-testid="ImageDrawer_Img_Modal"
            src={image}
            alt={alt}
            style={{
              maxHeight: "100%",
              width: matchedBreakpoint ? "100%" : "70%",
              borderRadius: "16px",
            }}
          />
        </Fade>
      </Modal>
    </>
  );
};

export default memo(ImageDrawer);

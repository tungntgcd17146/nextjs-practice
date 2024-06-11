import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { memo } from "react";

interface Props {
  logoImage: string | StaticImport;
  alt: string
}

const Logo = ({ logoImage, alt }: Props) => {
  return (
    <Image
      width={48}
      height={48}
      src={logoImage}
      alt={alt}
    />
  );
};

export default memo(Logo);

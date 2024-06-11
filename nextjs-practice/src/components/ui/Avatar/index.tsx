import { memo } from "react";

import Badge from "@mui/material/Badge";
import { AvatarProps, Avatar as MuiAvatar, styled } from "@mui/material";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Props extends AvatarProps {
  imgNextSrc: string | StaticImport;
  alt: string;
  size: "small" | "medium" | "large";
  avtBackground?: string;
  BadgeIcon?: React.ReactNode;
  onClick?: () => void;
  badgeSx?: React.CSSProperties;
  badgeAnchorOrigin?: {
    vertical: "top" | "bottom";
    horizontal: "left" | "right";
  };
}

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    border: `1px solid ${theme.palette.primary.main}`,
    padding: 0,
    margin: 0,
    width: 24,
    height: 24,
    borderRadius: "100%",
    backgroundColor: theme.palette.info.main,
    color: theme.palette.primary.main,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "16px",
      height: "16px",
      borderRadius: "50%",
    },
  },
}));

const Avatar = ({
  imgNextSrc,
  BadgeIcon,
  onClick,
  size = "medium",
  avtBackground,
  alt,
  sx,
  badgeSx,
  badgeAnchorOrigin = { vertical: "bottom", horizontal: "right" },
  ...rest
}: Props) => {
  const getSize = (sizes?: "small" | "medium" | "large") => {
    switch (sizes) {
      case "small":
        return "48px";
      case "medium":
        return "64px";
      case "large":
        return "80px";
    }
  };

  const avtCommonStyle = {
    width: getSize(size),
    height: getSize(size),
    backgroundColor: avtBackground,
    cursor: "pointer",
  };

  if (!BadgeIcon) {
    return (
      <MuiAvatar
        sx={{ ...avtCommonStyle, ...sx }}
        data-testid="Avatar_MuiAvatar"
        onClick={onClick}
        {...rest}
      >
        <Image alt={alt} src={imgNextSrc} layout='fill'/>
      </MuiAvatar>
    );
  }

  return (
    <StyledBadge
      data-testid="Avatar_StyledBadge"
      overlap="circular"
      anchorOrigin={badgeAnchorOrigin}
      badgeContent={BadgeIcon}
      onClick={onClick}
      sx={badgeSx}
    >
      <MuiAvatar sx={{ ...avtCommonStyle, ...sx }} {...rest}>
        <Image alt={alt} src={imgNextSrc} layout='fill'/>
      </MuiAvatar>
    </StyledBadge>
  );
};

export default memo(Avatar);

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";

import { NavigateItem } from "@/src/types/navigation";

export const menuItems: NavigateItem[] = [
  {
    text: "Profile",
  },
  {
    text: "Edit Profile",
  },
  {
    isDivider: true,
  },
  {
    text: "Analytics",
    icon: <HomeOutlinedIcon />,
  },
  {
    text: "Affiliate center",
    icon: <DiamondOutlinedIcon />,
  },
  {
    text: "Explore creator",
    icon: <AccountCircleOutlinedIcon />,
  },
  {
    isDivider: true,
  },
  {
    text: "Upgrade to Pro",
    icon: <DonutSmallOutlinedIcon />,
  },
  {
    isDivider: true,
  },
  {
    text: "Account Settings",
  },
  {
    text: "Log out",
    go: "/",
  },
];

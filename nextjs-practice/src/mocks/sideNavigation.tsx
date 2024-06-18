import { NavigateItem } from "@/src/types/navigation";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import RecommendOutlinedIcon from "@mui/icons-material/RecommendOutlined";

export const navigationItems: NavigateItem[] = [
  {
    text: "Home",
    icon: <HomeOutlinedIcon />,
    go: "/home",
  },
  {
    text: "Products",
    icon: <DiamondOutlinedIcon />,
    go: "/products",
  },
  {
    text: "Customers",
    icon: <AccountCircleOutlinedIcon />,
    go: "/customers",
  },
  {
    text: "Shop",
    icon: <StorefrontOutlinedIcon />,
    go: "/shop",
  },
  {
    text: "Income",
    icon: <DonutSmallOutlinedIcon />,
    go: "/income",
  },
  {
    text: "Promote",
    icon: <RecommendOutlinedIcon />,
    go: "/promote",
  },
];

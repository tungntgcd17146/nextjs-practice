import { BASE_REDIRECT_URL } from "@/src/constants/common";

export interface NavigateItem {
  text?: string;
  go?: string;
  isSelected?: boolean;
  isDisabled?: boolean;
  icon?: React.ReactNode;
  isDivider?: boolean;
}

export enum ShopTabs {
  PRODUCTS = "Products",
  FOLLOWERS = "Followers",
  FOLLOWING = "Following",
}

export enum TabsNavigation {
  PRODUCTS = BASE_REDIRECT_URL,
  FOLLOWERS = `${BASE_REDIRECT_URL}/followers`,
  FOLLOWING = `${BASE_REDIRECT_URL}/following`,
}

export enum TabsValue {
  PRODUCTS,
  FOLLOWERS,
  FOLLOWING,
}

export interface NavigateItem {
  text?: string;
  go?: string;
  isSelected?: boolean;
  isDisabled?: boolean;
  icon?: React.ReactNode;
  isDivider?: boolean;
}

export enum ShopTabs {
  PRODUCTS = 'Products',
  FOLLOWERS = 'Followers',
  FOLLOWING = 'Following',
}

export enum TabsNavigation {
  PRODUCTS = '/shop',
  FOLLOWERS = '/shop/followers',
  FOLLOWING = '/shop/following',
}

export enum TabsValue {
  PRODUCTS,
  FOLLOWERS,
  FOLLOWING,
}

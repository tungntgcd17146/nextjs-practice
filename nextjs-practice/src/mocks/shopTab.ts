import { NavigateItem, ShopTabs, TabsNavigation } from '@/src/types/navigation';

export const tabItems: NavigateItem[] = [
  {
    text: ShopTabs.PRODUCTS,
    isDisabled: false,
    go: TabsNavigation.PRODUCTS,
  },
  {
    text: ShopTabs.FOLLOWERS,
    isDisabled: false,
    go: TabsNavigation.FOLLOWERS,
  },
  {
    text: ShopTabs.FOLLOWING,
    isDisabled: false,
    go: TabsNavigation.FOLLOWING,
  },
];

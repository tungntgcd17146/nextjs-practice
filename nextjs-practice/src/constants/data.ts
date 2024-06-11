import { FeatureProduct, NavigateItem, ShopSelect, ShopTabs, UserContact } from '@/src/types'

//img
import Product1 from '@/public/assets/Product1.webp'
import Product2 from '@/public/assets/Product2.webp'
import Product3 from '@/public/assets/Product3.webp'

export const tabItems: NavigateItem[] = [
  {
    text: ShopTabs.PRODUCTS,
    isDisabled: false
  },
  {
    text: ShopTabs.FOLLOWERS,
    isDisabled: false
  },
  {
    text: ShopTabs.FOLLOWING,
    isDisabled: false
  }
]

export const selectOption = [
  {
    id: '0',
    name: ShopSelect.ALL,
    value: ShopSelect.ALL
  },
  {
    id: '1',
    name: ShopSelect.RECENT,
    value: ShopSelect.RECENT
  },
  {
    id: '2',
    name: ShopSelect.NEW,
    value: ShopSelect.NEW
  },
  {
    id: '3',
    name: ShopSelect.POPULAR,
    value: ShopSelect.POPULAR
  }
]

export const userImageData = [
  {
    img: Product1,
    imgTitle: 'product 1'
  },
  {
    img: Product2,
    imgTitle: 'product 2'
  },
  {
    img: Product3,
    imgTitle: 'product 3'
  }
]

export const fakeUserContact: UserContact = {
  id: 1,
  userName: 'Rosetta Gottlieb',
  productNumber: 12,
  followerNumber: 23,
  contactStatus: 'follower'
}

export const fakeFeatureForProductData: FeatureProduct[] = [
  { text: '128 prebuilt screens' },
  { text: 'SaaS landing page ready' },
  { text: 'Global styleguide' },
  { text: 'Dark + light more ready' }
]

export const fakeProductOverview = `Meet Node - a crypto NFT marketplace iOS UI design kit for Figma, Sketch, and Adobe XD. The kit includes

126 stylish mobile screens in light and dark mode, a bunch of crypto 3D illustrations, 1 SaaS landing

page with full premade breakpoints, and hundreds of components to help you ship your next crypto, NFT
product faster.

Types of screens included: onboarding, connect wallet, home feed, profile, upload, menu, search, product
detail, notification...

If you have any questions or requests, please feel free to leave them all in the comments section.`

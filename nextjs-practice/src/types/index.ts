export interface NavigateItem {
  text: string
  go?: string
  isSelected?: boolean
  isDisabled?: boolean
  icon?: React.ReactNode
}

export enum ShopTabs {
  PRODUCTS = 'Products',
  FOLLOWERS = 'Followers',
  FOLLOWING = 'Following'
}

export enum ShopSelect {
  ALL = 'All',
  RECENT = 'Most recent',
  NEW = 'Most new',
  POPULAR = 'Most popular'
}

export interface Product {
  id: number
  productName: string
  productCategory: string
  productPrice: number
  productRating: number
  productRatingCount: number
  popularity: string
}

export interface FeatureProduct {
  text: string
}

export interface UserContact {
  id: number
  userName: string
  productNumber: number
  followerNumber: number
  contactStatus: 'following' | 'follower'
}

export interface Checkbox {
  id?: string
  sx?: React.CSSProperties
  labelPlacement?: 'top' | 'start' | 'bottom' | 'end'
  isChecked: boolean
  label?: string
}

import { UserContact } from '@/src/types/contact';
import { FeatureProduct } from '@/src/types/product';

//img
import Product1 from '@/public/assets/Product1.webp';
import Product2 from '@/public/assets/Product2.webp';
import Product3 from '@/public/assets/Product3.webp';

export const userImageData = [
  {
    img: Product1,
    imgTitle: 'product 1',
  },
  {
    img: Product2,
    imgTitle: 'product 2',
  },
  {
    img: Product3,
    imgTitle: 'product 3',
  },
];

export const fakeUserContact: UserContact = {
  id: 1,
  userName: 'Rosetta Gottlieb',
  productNumber: 12,
  followerNumber: 23,
  contactStatus: 'followers',
};

export const fakeFeatureForProductData: FeatureProduct[] = [
  { text: '128 prebuilt screens' },
  { text: 'SaaS landing page ready' },
  { text: 'Global styleguide' },
  { text: 'Dark + light more ready' },
];

export const fakeProductOverview = `Meet Node - a crypto NFT marketplace iOS UI design kit for Figma, Sketch, and Adobe XD. The kit includes

126 stylish mobile screens in light and dark mode, a bunch of crypto 3D illustrations, 1 SaaS landing

page with full premade breakpoints, and hundreds of components to help you ship your next crypto, NFT
product faster.

Types of screens included: onboarding, connect wallet, home feed, profile, upload, menu, search, product
detail, notification...

If you have any questions or requests, please feel free to leave them all in the comments section.`;

export const singleProduct = {
  productName: 'test',
  productCategory: 'test',
  productPrice: 12,
  productRating: 0,
  productRatingCount: 0,
};

export const contacts: UserContact[] = [
  {
    id: 1,
    userName: 'Tung Nguyen',
    productNumber: 1,
    followerNumber: 1,
    contactStatus: 'following',
  },
  {
    id: 2,
    userName: 'Chelsie Haley',
    productNumber: 1,
    followerNumber: 1,
    contactStatus: 'following',
  },
  {
    id: 3,
    userName: 'Tung Nguyen',
    productNumber: 1,
    followerNumber: 1,
    contactStatus: 'following',
  },
];

export const products = [
  {
    id: 1,
    productName: 'Product 1',
    productCategory: 'Illustration',
    productPrice: 88,
    productRating: 4.9,
    productRatingCount: 1251,
    popularity: 'Most recent',
    createdAt: '2022-01-10T12:00:00Z',
  },
  {
    id: 2,
    productName: 'Product 2',
    productCategory: 'Illustration',
    productPrice: 88,
    productRating: 4.9,
    productRatingCount: 1251,
    popularity: 'Most recent',
    createdAt: '2022-01-10T12:00:00Z',
  },
];

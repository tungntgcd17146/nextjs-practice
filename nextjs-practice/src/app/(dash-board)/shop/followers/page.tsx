import Contacts from '@/src/components/layouts/Shop/ShopContent/Contacts';
import { FOLLOWERS_CONTACT_QUERY } from '@/src/constants/common';
import { fetchContacts } from '@/src/services/contactsService';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Follower',
  description: 'People who are following you',
};
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    query?: string;
  };
}) {
  const query = searchParams?.query;

  const { data: contacts } = await fetchContacts({
    _page: 1,
    contactStatus: FOLLOWERS_CONTACT_QUERY,
    ...(query && { q: query }),
  });

  return <Contacts contacts={contacts} />;
}

import Contacts from '@/src/components/layouts/Shop/ShopContent/Contacts';
import { FOLLOWING_CONTACT_QUERY } from '@/src/constants/common';
import { fetchContacts } from '@/src/services/contactsService';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Following',
  description: 'People you are following',
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
    contactStatus: FOLLOWING_CONTACT_QUERY,
    ...(query && { q: query }),
  });

  return <Contacts contacts={contacts} />;
}

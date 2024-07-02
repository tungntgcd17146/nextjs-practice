import Contacts from '@/src/components/layouts/Shop/ShopContent/Contacts';
import { fetchContacts } from '@/src/services/contactsService';

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
    contactStatus: 'followers',
    ...(query && { q: query }),
  });

  return <Contacts contacts={contacts} />;
}

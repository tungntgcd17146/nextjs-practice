import Contacts from "@/src/components/layouts/Shop/ShopContent/Contacts";
import { fetchContacts } from "@/src/services/contactsService";

export default async function Page() {
  const contacts = await fetchContacts({ contactStatus: "followers" });

  return <Contacts contacts={contacts} />;
}

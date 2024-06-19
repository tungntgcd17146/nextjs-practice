import { USER_CONTACT_URL } from "@/src/constants/url";
import { get } from "../api";
import { UserContact, ContactQueryParams } from "@/src/types/contact";

export const fetchContacts = async (queryParams: ContactQueryParams) => {
  return await get<UserContact[]>(USER_CONTACT_URL, queryParams);
};

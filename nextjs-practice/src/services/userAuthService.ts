import { USER_AUTHENTICATION_URL } from '@/src/constants/url';
import { get } from '../api';
import { UserAuthentication, UserQueryParams } from '@/src/types/user';

export const fetchUserByEmail = async (queryParams?: UserQueryParams) => {
  return await get<UserAuthentication[]>(USER_AUTHENTICATION_URL, queryParams);
};

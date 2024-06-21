import { CommonQueryParams } from "@/src/types/common";

export type ContactStatus = "following" | "followers";

export interface UserContact {
  id: number;
  userName: string;
  productNumber: number;
  followerNumber: number;
  contactStatus: ContactStatus;
}

export interface ContactQueryParams extends CommonQueryParams {
  contactStatus: ContactStatus;
}

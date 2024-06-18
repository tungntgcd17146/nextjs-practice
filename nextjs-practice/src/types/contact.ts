export type ContactQuery = "following" | "followers";

export interface UserContact {
  id: number
  userName: string
  productNumber: number
  followerNumber: number
  contactStatus: ContactQuery
}

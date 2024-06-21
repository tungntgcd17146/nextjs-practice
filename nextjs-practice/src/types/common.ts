export interface CommonQueryParams {
  q?: string;
  _sort?: string;
  _order?: "desc" | "asc";
  _page?: number;
  _limit?: number;
}

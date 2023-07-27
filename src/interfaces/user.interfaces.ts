export interface IUsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IData[];
  support: ISupport;
}

export interface IData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface ISupport {
  url: string;
  text: string;
}

export interface IUserResponse {
  data: IData;
  support: ISupport;
}

export interface IBaseModel {
  id: number;
  created_at: number;
  created_by: number;
  updated_at: number | null;
  updated_by: number | null;
  status: number;
  order: number;
}

export interface ICreatedBy {
  avatar: string | null;
  email: string | null;
  first_name: string;
  id: number;
  last_name: string;
  middle_name: string | null;
  role: Array<string>;
  status: number;
  username: string;
}

export interface IUpdatedBy {
  avatar: string | null;
  email: string | null;
  first_name: string;
  id: number;
  last_name: string;
  role: Array<string>;
  status: number;
  username: string;
}

export interface IUserField {
  avatar: string;
  email: string | null;
  first_name: string;
  id: number;
  last_name: string;
  role: Array<string>;
  status: number;
  username: string;
}

export type InformerDRDT<T = any> = {
  items: T[];
  _meta: {
    currentPage: number;
    pageCount: number;
    perPage: number;
    totalCount: number;
  };
  _links: {
    first: { href: string };
    last: { href: string };
    self: { href: string };
  };
};

// default response one data type
export type InformerById<T = any> = {
  data: T;
  message: string;
  status: number;
};

import { User } from './user';

export interface LoginInput {
  email: string;
  password: string;
}

export interface LoginResp {
  login: { token: string; user: User } | null;
}

export interface RegisterInput {
  email: string;
  password: string;
}

export interface RegisterResp {
  register: { token: string; user: User } | null;
}

import { inject, Injectable, signal, computed } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { firstValueFrom } from 'rxjs';

import {
  LoginInput,
  LoginResp,
  RegisterInput,
  RegisterResp,
} from '../../core/interfaces/auth';
import { User } from '../../core/interfaces/user';

const AUTH_TOKEN_KEY = 'auth_token';
const AUTH_USER_KEY = 'auth_user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly apollo = inject(Apollo);

  readonly token = signal<string | null>(this.getStoredToken());
  readonly user = signal<User | null>(this.getStoredUser());

  readonly isAuthenticated = computed(() => !!this.token() && !!this.user());

  private getStoredToken(): string | null {
    if (typeof window === 'undefined') {
      return null;
    }
    return localStorage.getItem(AUTH_TOKEN_KEY);
  }

  private getStoredUser(): User | null {
    if (typeof window === 'undefined') {
      return null;
    }

    const userStr = localStorage.getItem(AUTH_USER_KEY);
    if (!userStr) {
      return null;
    }

    try {
      return JSON.parse(userStr) as User;
    } catch {
      localStorage.removeItem(AUTH_USER_KEY);
      return null;
    }
  }

  private static readonly LOGIN_MUTATION = gql`
    mutation Login($input: AuthInput!) {
      login(input: $input) {
        token
        user {
          id
          username
          email
          posts
          comments
          createdAt
        }
      }
    }
  `;

  private static readonly REGISTER_MUTATION = gql`
    mutation Register($input: AuthInput!) {
      register(input: $input) {
        token
        user {
          id
          username
          email
          posts
          comments
          createdAt
        }
      }
    }
  `;

  async login(input: LoginInput): Promise<{ token: string; user: User }> {
    const res = await firstValueFrom(
      this.apollo.mutate<LoginResp, { input: LoginInput }>({
        mutation: AuthService.LOGIN_MUTATION,
        variables: { input },
      })
    );

    const payload = res.data?.login;
    if (!payload?.token || !payload.user) {
      throw new Error('La réponse du serveur est invalide');
    }

    this.setAuth(payload.token, payload.user);
    return payload;
  }

  async register(
    input: RegisterInput
  ): Promise<{ token: string; user: User }> {
    const res = await firstValueFrom(
      this.apollo.mutate<RegisterResp, { input: RegisterInput }>({
        mutation: AuthService.REGISTER_MUTATION,
        variables: { input },
      })
    );

    const payload = res.data?.register;
    if (!payload?.token || !payload.user) {
      throw new Error('La réponse du serveur est invalide');
    }

    this.setAuth(payload.token, payload.user);
    return payload;
  }

  private setAuth(token: string, user: User) {
    this.token.set(token);
    this.user.set(user);

    if (typeof window !== 'undefined') {
      localStorage.setItem(AUTH_TOKEN_KEY, token);
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    }
  }

  logout() {
    this.token.set(null);
    this.user.set(null);

    if (typeof window !== 'undefined') {
      localStorage.removeItem(AUTH_TOKEN_KEY);
      localStorage.removeItem(AUTH_USER_KEY);
    }
  }
}

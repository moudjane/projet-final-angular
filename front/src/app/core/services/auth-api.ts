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

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly apollo = inject(Apollo);

  readonly token = signal<string | null>(this.getStoredToken());
  readonly user = signal<User | null>(this.getStoredUser());
  readonly isAuthenticated = computed(() => !!this.token() && !!this.user());

  private getStoredToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('auth_token');
    }
    return null;
  }

  private getStoredUser(): User | null {
    if (typeof window !== 'undefined') {
      const userStr = localStorage.getItem('auth_user');
      return userStr ? JSON.parse(userStr) : null;
    }
    return null;
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

    this.token.set(payload.token);
    this.user.set(payload.user);

    // Sauvegarder dans localStorage
    localStorage.setItem('auth_token', payload.token);
    localStorage.setItem('auth_user', JSON.stringify(payload.user));

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

    this.token.set(payload.token);
    this.user.set(payload.user);

    // Sauvegarder dans localStorage
    localStorage.setItem('auth_token', payload.token);
    localStorage.setItem('auth_user', JSON.stringify(payload.user));

    return payload;
  }

  logout() {
    this.token.set(null);
    this.user.set(null);
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
  }
}

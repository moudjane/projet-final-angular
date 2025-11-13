import { Injectable, signal, computed, inject } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { firstValueFrom } from 'rxjs';

export interface User {
  id: string;
  username: string;
  email: string;
  posts: string[];
  comments: string[];
  createdAt: string;
}

interface LoginInput {
  email: string;
  password: string;
}

interface LoginResp {
  login: { token: string; user: User } | null;
}

interface RegisterInput {
  email: string;
  password: string;
}

interface RegisterResp {
  register: { token: string; user: User } | null;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly apollo = inject(Apollo);

  readonly token = signal<string | null>(null);
  readonly user = signal<User | null>(null);
  readonly isAuthenticated = computed(() => !!this.token() && !!this.user());

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
      this.apollo.mutate<LoginResp>({
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
    return payload;
  }

  async register(input: RegisterInput): Promise<{ token: string; user: User }> {
    const res = await firstValueFrom(
      this.apollo.mutate<RegisterResp>({
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

    return payload;
  }

  //
  // 🚪 LOGOUT
  //
  logout() {
    this.token.set(null);
    this.user.set(null);
  }
}

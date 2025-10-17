import { Injectable, signal, computed, inject } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { firstValueFrom } from 'rxjs';

export interface User {
  id: string;
  username: string;
  email: string;
  posts: number;
  comments: number;
  createdAt: string;
}

interface LoginInput {
  email: string;
  password: string;
}

interface LoginResp {
  login: { token: string; user: User } | null;
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

  /**
   * Appelle l'API GraphQL, stocke token + user dans les signals, et renvoie le payload.
   * Lance une erreur si la réponse est invalide.
   */
  async login(input: LoginInput): Promise<{ token: string; user: User }> {
    console.log('Appel de login avec input :', input);
    const res = await firstValueFrom(
      this.apollo.mutate<LoginResp>({
        mutation: AuthService.LOGIN_MUTATION,
        variables: { input }
      })
    );

    console.log('Réponse login :', res);
    const payload = res.data?.login;
    if (!payload?.token || !payload.user) {
      throw new Error('La réponse du serveur est invalide');
    }

    this.token.set(payload.token);
    this.user.set(payload.user);
    return payload;
  }

  logout() {
    this.token.set(null);
    this.user.set(null);
    // si tu veux nettoyer du storage, fais-le ici
  }
}
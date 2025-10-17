import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { firstValueFrom } from 'rxjs';
import { Auth } from '../../services/auth';

const LOGIN_MUTATION = gql`
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

type LoginResp = {
  login: { token: string; user: User } | null;
};

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly apollo = inject(Apollo);
  private readonly router = inject(Router);
  private readonly auth = inject(Auth);

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  readonly isSubmitting = signal(false);
  readonly error = signal('');

  readonly emailInvalid = computed(
    () => this.form.controls.email.invalid && (this.form.controls.email.touched || this.form.controls.email.dirty)
  );
  readonly passwordInvalid = computed(
    () => this.form.controls.password.invalid && (this.form.controls.password.touched || this.form.controls.password.dirty)
  );

  async handleSubmit() {
    if (this.form.invalid || this.isSubmitting()) return;

    this.error.set('');
    this.isSubmitting.set(true);

    const { email, password } = this.form.getRawValue();

    try {
      const res = await firstValueFrom(
        this.apollo.mutate<LoginResp>({
          mutation: LOGIN_MUTATION,
          variables: { input: { email, password } },
        })
      );

      const payload = res.data?.login;
      if (!payload?.token) {
        this.error.set('La réponse du serveur est invalide');
        return;
      }

      this.auth.setAuth({ token: payload.token, user: payload.user });
      this.router.navigateByUrl('/');
    } catch (e) {
      console.error('Erreur dans handleSubmit :', e);
      const msg = e instanceof Error ? e.message : 'Une erreur est survenue lors de la connexion';
      this.error.set(msg);
    } finally {
      this.isSubmitting.set(false);
    }
  }
}

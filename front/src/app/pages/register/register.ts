import {
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth-api.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  readonly error = signal('');
  readonly successMessage = signal('');

  readonly form = this.fb.group({
    email: this.fb.control('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: this.fb.control('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)],
    }),
    confirmPassword: this.fb.control('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  readonly isValid = computed(() => {
    const email = this.form.controls.email.value.trim();
    const password = this.form.controls.password.value;
    const confirmPassword = this.form.controls.confirmPassword.value;

    return (
      email !== '' &&
      password === confirmPassword &&
      password.length >= 6 &&
      this.form.valid
    );
  });

  async handleSubmit() {
    if (!this.isValid()) {
      this.error.set(
        "L'email doit être renseigné et les mots de passe doivent correspondre et être d’au moins 6 caractères."
      );
      return;
    }

    try {
      this.error.set('');
      this.successMessage.set('');

      const { token, user } = await this.authService.register({
        email: this.form.controls.email.value,
        password: this.form.controls.password.value,
      });

      if (!token || !user) {
        this.error.set('La réponse du serveur est invalide');
        return;
      }

      this.successMessage.set(
        'Utilisateur créé avec succès. Vous allez être redirigé.'
      );

      setTimeout(() => {
        this.router.navigateByUrl('/');
      }, 2000);
    } catch (e) {
      const message =
        e instanceof Error ? e.message : "Erreur lors de l’inscription";
      this.error.set(message);
    }
  }
}

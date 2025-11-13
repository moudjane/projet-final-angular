import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth-api.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  handleLogout() {
    this.authService.logout();
    localStorage.removeItem('likedPostId');
    this.router.navigateByUrl('/login');
  }
}

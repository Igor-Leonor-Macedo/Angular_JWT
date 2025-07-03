import {inject, Injectable, PLATFORM_ID} from '@angular/core';
import {jwtDecode} from 'jwt-decode';
import {isPlatformBrowser} from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private platformId = inject(PLATFORM_ID);
  private tokenKey = 'access_token';

  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  saveToken(token: string) {
    if (this.isBrowser()) {
      localStorage.setItem(this.tokenKey, token);
    }
  }

  getToken(): string | null {
    if (!this.isBrowser()) return null;
    return localStorage.getItem(this.tokenKey);
  }

  clearToken() {
    if (this.isBrowser()) {
      localStorage.removeItem(this.tokenKey);
    }
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;

    try {
      const decoded: any = jwtDecode(token);
      const now = Math.floor(Date.now() / 1000);
      return decoded.exp > now;
    } catch {
      return false;
    }
  }

  getUserRoles(): string[] {
    const token = this.getToken();
    if (!token) return [];
    try {
      const decoded: any = jwtDecode(token);
      return decoded.roles || [];
    } catch {
      return [];
    }
  }
}

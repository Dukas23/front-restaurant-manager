import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = `${environment.base_url}/auth/`; // URL base de tu API de autenticación

  private httpClient = inject(HttpClient);

  login(email: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      // withCredentials: true,
    };
    return this.httpClient
      .post(`${this.apiUrl}login`, { email, password }, httpOptions)
      .pipe(
        tap((response: any) => {
          if (response && response.jwt) {
            localStorage.setItem('jwt_token', response.jwt);
          }
        })
      );
  }

  // Método para registrar un nuevo usuario
  register(username: string, email: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.httpClient.post(
      `${this.apiUrl}signup`,
      { username, email, password },
      httpOptions
    );
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('jwt_token');
    // Opcional: realizar una solicitud al backend para invalidar el token
  }

  // Método para obtener el token almacenado
  getToken(): string | null {
    return localStorage.getItem('jwt_token') || '' ;
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    const token = this.getToken();
    // Aquí puedes añadir lógica adicional para verificar la validez del token
    return !!token;
  }
}

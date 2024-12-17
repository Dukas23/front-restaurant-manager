import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth/'; // URL base de tu API de autenticación

  constructor(private http: HttpClient) {}

  // Método para iniciar sesión
  login(username: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true, // Incluye las cookies en la solicitud
    };
    return this.http
      .post(`${this.apiUrl}signin`, { username, password }, httpOptions)
      .pipe(
        tap((response: any) => {
          if (response && response.token) {
            // Almacena el token en el almacenamiento local
            localStorage.setItem('jwt_token', response.token);
          }
        })
      );
  }

  // Método para registrar un nuevo usuario
  register(username: string, email: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(
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
    return localStorage.getItem('jwt_token');
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    const token = this.getToken();
    // Aquí puedes añadir lógica adicional para verificar la validez del token
    return !!token;
  }
}

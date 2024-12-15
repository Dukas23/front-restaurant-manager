// src/app/features/empresas/services/empresa.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresa.model';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {
  private baseUrl = 'http://localhost:8080/api/v1/empresas';

  constructor(private http: HttpClient) {}

  getEmpresas(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.baseUrl);
  }
}

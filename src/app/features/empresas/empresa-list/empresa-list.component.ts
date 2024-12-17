import { Component,OnInit } from '@angular/core';
import { Empresa } from '../../../core/models/empresa.model';
import { EmpresaService } from '../../../core/services/empresa.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empresa-list',
  imports: [CommonModule],
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.css'],
})
export class EmpresaListComponent implements OnInit {
  empresas: Empresa[] = [];

  constructor(private empresaService: EmpresaService) {}

  ngOnInit(): void {
    this.empresaService.getEmpresas().subscribe(
      (data) => (this.empresas = data),
      (error) => console.error('Error al obtener las empresas', error)
    );
  }
}

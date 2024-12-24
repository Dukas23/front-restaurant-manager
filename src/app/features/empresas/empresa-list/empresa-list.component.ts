import { Component,inject,OnInit } from '@angular/core';
import { Empresa } from '../../../core/models/empresa.model';
import { EmpresaService } from '../../../core/services/empresa.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-empresa-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.css'],
})
export class EmpresaListComponent implements OnInit {
  public empresas$!: Observable<Empresa[]>;
  private empresaService= inject(EmpresaService);

  ngOnInit(): void {
    this.empresas$= this.empresaService.getEmpresas();
  }
}

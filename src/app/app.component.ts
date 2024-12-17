import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { EmpresaListComponent } from "./features/empresas/empresa-list/empresa-list.component";
import { LoginComponent } from "./features/Auth/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, EmpresaListComponent, LoginComponent],
  template: `<main>
    <header class="brand-name">
      <img class="brand-logo" src="logo.svg" alt="logo" aria-hidden="true" />
    </header>
    <section class="content">
      <router-outlet></router-outlet>
      <!-- Asegura que RouterOutlet esté presente -->
    </section>
  </main> `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front-restaurant-manager';
}

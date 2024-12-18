import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { EmpresaListComponent } from "./features/empresas/empresa-list/empresa-list.component";
import { LoginComponent } from "./features/Auth/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <main>
    <a routerLink="/">
      <header class="brand-name">
        <img
          class="brand-logo"
          src="/assets/icons/logo.svg"
          alt="logo"
          aria-hidden="true"
        />
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front-restaurant-manager';
}

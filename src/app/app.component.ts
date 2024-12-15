import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { EmpresaListComponent } from "./features/empresas/empresa-list/empresa-list.component";

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'front-restaurant-manager';
// }

@Component({
  selector: 'app-root',
  imports: [HomeComponent, EmpresaListComponent],
  template: `<main>
      <header class="brand-name">
        <img class="brand-logo" src="logo.svg" alt="logo" aria-hidden="true" />
      </header>
      <section class="content">
        <app-home></app-home>
        <app-empresa-list></app-empresa-list>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}

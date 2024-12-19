import { Component, importProvidersFrom } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  // template: ` <main>
  //   <a routerLink="/">
  //     <header class="brand-name">
  //       <img
  //         class="brand-logo"
  //         src="/assets/icons/logo.svg"
  //         alt="logo"
  //         aria-hidden="true"
  //       />
  //     </header>
  //   </a>
  //   <section class="content">
  //     <router-outlet></router-outlet>
  //   </section>
  // </main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front-restaurant-manager';
}

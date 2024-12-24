// import {
//   ApplicationConfig,
//   provideZoneChangeDetection,
//   importProvidersFrom,
// } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { FormsModule } from '@angular/forms'; // Importa FormsModule
// import { routes } from './app.routes';
// import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { JwtInterceptor } from './core/services/jwt.interceptor'; // Adjust the path as necessary

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideZoneChangeDetection({ eventCoalescing: true }),
//     provideRouter(routes),
//     importProvidersFrom(FormsModule), // Proporciona FormsModule

//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: JwtInterceptor,
//       multi: true,
//     },
//   ],
// };
import {
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors,} from '@angular/common/http';
import { authInterceptor } from './interceptor/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    provideHttpClient(
      withInterceptors([ authInterceptor ])
    )
  ],
};

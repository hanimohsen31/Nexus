import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import {
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { TokenInterceptor } from './store/token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(routes),
    // http providers
    provideHttpClient(),
    provideHttpClient(withInterceptorsFromDi()),
    provideHttpClient(withInterceptors([TokenInterceptor])),
  ],
};

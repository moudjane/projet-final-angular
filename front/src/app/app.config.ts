import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client';
import { ApolloLink } from '@apollo/client';
import { HttpHeaders } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideHttpClient(), provideApollo(() => {
      const httpLink = inject(HttpLink);

      const http = httpLink.create({
        uri: 'http://localhost:4000/graphql',
      });

      const authMiddleware = new ApolloLink((operation, forward) => {
        const token = typeof window !== 'undefined' 
          ? localStorage.getItem('auth_token') 
          : null;

        if (token) {
          operation.setContext(({ headers = new HttpHeaders() }: { headers?: HttpHeaders }) => ({
            headers: headers.set('Authorization', `Bearer ${token}`),
          }));
        }

        return forward(operation);
      });

      return {
        link: authMiddleware.concat(http),
        cache: new InMemoryCache(),
      };
    })
  ]
};

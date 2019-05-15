import { NgModule, Injectable, ModuleWithProviders, Inject } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertsClientConfig, ALERTS_CLIENT_CONFIG } from '../alerts.client.config';


@Injectable()
export class AlertsAuthInterceptor implements HttpInterceptor {

  /**
   * constructor
   * @param config
   */
  constructor(@Inject(ALERTS_CLIENT_CONFIG) private config: AlertsClientConfig) { }

  /**
   * Get the auth token from the service.
   * Clone the request and replace the original headers with
   * cloned headers, updated with the authorization.
   * send cloned request with header to the next handler.
   * @param req
   * @param next
   */
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    //headers.append('Content-Type', 'application/json');

    let token = localStorage.getItem(`id_token_delegate_${this.config.Auth0ApiAppName}`);
    const authReq = req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) });
    return next.handle(authReq);
  }
}

@NgModule({})
export class AlertsAuthInterceptorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AlertsAuthInterceptorModule,
      providers: [{ provide: HTTP_INTERCEPTORS, useClass: AlertsAuthInterceptor, multi: true }]
    }
  }
}


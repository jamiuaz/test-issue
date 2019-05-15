import { NgModule, ModuleWithProviders } from '@angular/core';
import { AlertSubscriptionsService } from './alert-subscriptions.service';

@NgModule({})
export class AlertSubscriptionsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AlertSubscriptionsModule,
      providers: [AlertSubscriptionsService]
    }
  }
}

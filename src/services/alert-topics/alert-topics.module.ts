import { NgModule, ModuleWithProviders } from '@angular/core';
import { AlertTopicsService } from './alert-topics.service';

@NgModule({})
export class AlertTopicsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AlertTopicsModule,
      providers: [AlertTopicsService]
    }
  }
}

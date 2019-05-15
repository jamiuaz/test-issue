import { NgModule, ModuleWithProviders } from '@angular/core';
import { AlertMessageLogsService } from './alert-message-logs.service';

@NgModule({})
export class AlertMessageLogsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AlertMessageLogsModule,
      providers: [AlertMessageLogsService]
    }
  }
}

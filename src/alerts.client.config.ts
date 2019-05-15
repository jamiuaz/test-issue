import { InjectionToken } from '@angular/core';

export const ALERTS_CLIENT_CONFIG = new InjectionToken<AlertsClientConfig>('alertsClientConfig');

export interface AlertsClientConfig {
    Auth0ApiAppName: string;
    AlertsApiURL: string;
}


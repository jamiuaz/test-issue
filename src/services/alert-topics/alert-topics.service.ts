import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AlertsClientConfig, ALERTS_CLIENT_CONFIG } from '../../alerts.client.config';

@Injectable()
export class AlertTopicsService {
  private appName: string

  /**
   * Initialises a new instance of the AlertTopicsService class.
   * @param config
   */
  public constructor(
    private http: HttpClient,
    @Inject(ALERTS_CLIENT_CONFIG) private config: AlertsClientConfig,
  ) {}

  /**
    * Lists Topics
    * @returns An Observable containing a List of Topics
    */
  public ListAsync(): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${this.config.AlertsApiURL}/api/alertTopics`)
      .pipe(     
        catchError(this.handleError<Array<any>>())
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

}

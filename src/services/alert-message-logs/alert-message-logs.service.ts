import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AlertsClientConfig, ALERTS_CLIENT_CONFIG } from '../../alerts.client.config';
import * as model from './../../models';

@Injectable()
export class AlertMessageLogsService {
  private appName: string

  /**
   * Initialises a new instance of the AlertMessageLogsService class.
   * @param config
   */
  public constructor(
    private http: HttpClient,
    @Inject(ALERTS_CLIENT_CONFIG) private config: AlertsClientConfig,
  ) { }

  /**
     * Lists AlertLogs
     * @param page The page number of the alert message logs to list.
     * @param pageSize The pageSize of the alert message logs to list.
     * @param profileId The profileId of the alert message logs to list.
     * @param topicIds A string of comma separated topicIds of the alert message logs to list.
     * @param alertIds A string of comma separated alertIds of the alert message logs to list.
     * @param objectId The objectId of the alert message logs to list.
     * @param dataTypeId The dataTypeId of the alert message logs to list.
     * @returns An Observable containing a paged list of AlertLogs
     */
  public ListAsync(page?: number, pageSize?: number, profileId?: number, topicIds?: string, alertIds?: string,
    objectId?: string, dataTypeId?: string): Observable<model.IPagedList<model.AlertLog>> {
    let params = new HttpParams();
    if (page) {
      params.set('page', page.toString());
    }
    if (pageSize) {
      params.set('pageSize', pageSize.toString());
    }
    if (profileId) {
      params.set('profileId', profileId.toString());
    }
    if (topicIds) {
      params.set('topicIds', topicIds);
    }
    if (alertIds) {
      params.set('alertIds', alertIds);
    }
    if (objectId) {
      params.set('objectId', objectId);
    }
    if (dataTypeId) {
      params.set('dataTypeId', dataTypeId);
    }

    return this.http.get<model.IPagedList<model.AlertLog>>(`${this.config.AlertsApiURL}/api/AlertMessageLogs`, { params: params })
      .pipe(
        catchError(this.handleError<model.IPagedList<model.AlertLog>>())
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      //if (error instanceof Response) {

      //  let lError: Error = new Error();
      //  lError.status = error.status;
      //  lError.statusText = error.statusText;
      //  lError.details = error.json()
      //  return Observable.throw(lError);
      //}

      return of(result as T);
    };
  }

  public static extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  public static extractDataResponse(res: Response) {
    return res.ok;
  }

}

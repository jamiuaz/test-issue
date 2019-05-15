import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AlertsClientConfig, ALERTS_CLIENT_CONFIG } from '../../alerts.client.config';
import * as model from './../../models/models';

@Injectable()
export class AlertSubscriptionsService {
  private appName: string

  /**
   * Initialises a new instance of the AlertSubscriptionsService class.
   * @param bfAuthHttp
   * @param config
   */
  public constructor(
    private http: HttpClient,
    @Inject(ALERTS_CLIENT_CONFIG) private config: AlertsClientConfig,
  ) { }

  /**
    * Creates a new subscription and checks that the criteriaDataType is allowed for the alert / topic being subscribed to
    * @param createSubscriptionRequest The details of the new subscription to create.
    * @returns An Observable containing a Subscription
    */
  public CreateAsync(createSubscriptionRequest: model.CreateSubscriptionRequest): Observable<model.Subscription> {
    return this.http.post<model.Subscription>(`${this.config.AlertsApiURL}/api/alertssubscriptions`, createSubscriptionRequest)
      .pipe(
        catchError(this.handleError<model.Subscription>())
      );
  }

  /**
   * Removes an existing subscription by it's subscription criteria
   * @returns An Observable containing a Respone
   */
  public DeleteAsync(profileId: number, topicId: string, alertId: string, criteriaDataTypeId: string, criteriaIdentifier: string): Observable<{}> {
    return this.http.delete(`${this.config.AlertsApiURL}/api/alertssubscriptions/${profileId}/topic/${topicId}/alert/${alertId}/criteria/${criteriaDataTypeId}/${criteriaIdentifier}`)
      .pipe(
        catchError(this.handleError())
      );
  }

  /**
    * Removes an existing subscription by it's identifier
    * @param id The ID of the subscription to remove.
    * @returns An Observable containing a Respone
    */
  public DeleteByIdAsync(id: string): Observable<{}> {
    return this.http.delete(`${this.config.AlertsApiURL}/api/alertssubscriptions/${id}`)
      .pipe(
        catchError(this.handleError())
      );
  }

  /**
    * Get an individual Subscription by it's identifier
    * @param id The ID of the subscription to retrieve.
    * @returns An Observable containing a Subscription
    */
  public GetByIdAsync(id: number): Observable<model.Subscription> {
    return this.http.get<model.Subscription>(`${this.config.AlertsApiURL}/api/alertssubscriptions${id}`)
      .pipe(
        catchError(this.handleError<model.Subscription>())
      );
  }

  /**
     * Get an individual Subscription
     * @param id The ID of the subscription to retrieve.
     * @param topicId The topicId of the subscription to retrieve.
     * @param alertId The alertId of the subscription to retrieve.
     * @param criteriaDataTypeId The criteriaDataTypeId of the subscription to retrieve.
     * @param criteriaIdentifier The criteriaIdentifier of the subscription to retrieve.
     * @returns An Observable containing a Subscription
     */
  public GetAsync(profileId: number, topicId: string, alertId: string, criteriaDataTypeId: string, criteriaIdentifier: string) {
    let params = new HttpParams();
    if (profileId) {
      params.set('profileId', profileId.toString());
    }
    if (topicId) {
      params.set('topicId', topicId);
    }
    if (alertId) {
      params.set('alertId', alertId);
    }
    if (criteriaDataTypeId) {
      params.set('criteriaDataTypeId', criteriaDataTypeId);
    }
    if (criteriaIdentifier) {
      params.set('criteriaIdentifier', criteriaIdentifier);
    }

    return this.http.get<model.Subscription>(`${this.config.AlertsApiURL}/api/alertssubscriptions/subscription`, { params: params })
      .pipe(
        catchError(this.handleError<Array<any>>())
      );
  }

  /**
    * Lists Subscriptions
    * @param page The page number of the subscriptions to list.
    * @param pageSize The pageSize of the subscriptions to list.
    * @param profileId The profileId of the subscriptions to list.
    * @param topicId The topicId of the subscriptions to list.
    * @param alertId The alertId of the subscriptions to list.
    * @param criteriaList The Array of SubscriptionCriteria.
    * @param criteria The SubscriptionCriteria of the subscriptions to list.
    * @returns An Observable containing a paged list of Subscriptions
    */
  public ListAsync(page?: number, pageSize?: number, profileId?: number, topicId?: string, alertId?: string,
    criteriaList?: Array<model.SubscriptionCriteria>, criteria?: model.SubscriptionCriteria): Observable<model.IPagedList<model.Subscription>> {
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
    if (topicId) {
      params.set('topicId', topicId);
    }
    if (alertId) {
      params.set('alertId', alertId);
    }
    if (criteriaList) {
      params.set('criteriaList', JSON.stringify(criteriaList));
    }
    if (criteria) {
      params.set('criteria', JSON.stringify(criteria));
    }

    return this.http.get<model.IPagedList<model.Subscription>>(`${this.config.AlertsApiURL}/api/alertssubscriptions`, { params: params })
      .pipe(
        catchError(this.handleError<model.IPagedList<model.Subscription>>())
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}

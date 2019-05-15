import * as ety from '../enums';

export class Subscription {
  public _id: string;
  public alert: ety.Alert;
  public topic: ety.Topic;
  public profileId: number;
  public criteria: SubscriptionCriteria;
}

export class SubscriptionCriteria {
  public criteriaDataType: ety.CriteriaDataType;
  public criteriaId: string;
}

export class AlertLog {
  _id: string;
  messageId: string;
  logDate: Date;
  state: ety.LogState;
  subscription: Subscription;
  objectKey?: ObjectKey;
  body?: Body;
}

export class ObjectKey {
  id: string;
  dataType: ety.TopicDataType;
  key: string;
}

export class CreateSubscriptionRequest {
  public alertId: string;
  public topicId: string;
  public profileId: number;
  public criteria: SubscriptionCriteria;
}

export class DeleteSubscriptionRequest {
  public alert: ety.Alert;
  public topic: ety.Topic;
  public profileId: number;
  public criteria: SubscriptionCriteria;
}

export class IPagedList<T> {
  public page: number;
  public pageSize: number;
  public totalItems: number;
  public totalPages: number;
  public items: T[];
}

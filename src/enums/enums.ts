export abstract class EnumBase {
  public name: string;
  public id: string;

  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
  }
}

export class Alert extends EnumBase {
  private constructor(name: string, id: string) {
    super(name, id);
  }
  public static readonly GeneralPost = new Alert('General Post', 'GeneralPost');
  public static readonly GeneralEmailAlert = new Alert('General Email', 'GeneralEmail');
  public static readonly GeneralSMSAlert = new Alert('SMS Alert', 'SmsAlert');
  public static readonly FullApprovalEmail = new Alert('Full Approval Email', 'FullApprovalEmail');
  public static readonly AtlasLinkedApprovalEMail = new Alert('Atlas linked approval email', 'AtlasApprovalEmail');

  public static GetAll(): Alert[] {
    return [Alert.GeneralPost, Alert.GeneralEmailAlert, Alert.GeneralSMSAlert, Alert.FullApprovalEmail, Alert.AtlasLinkedApprovalEMail];
  }
}
export class Topic extends EnumBase {
  private constructor(name: string, id: string) {
    super(name, id);
  }
  public static readonly ArticleApproval = new Topic('Article Approval', 'ArticleApproval');
  public static readonly ArticlePublished = new Topic('Article Published', 'ArticlePublished');
  public static readonly ProductAllocate = new Topic('Product Allocated', 'ProductAllocate');
  public static readonly DeliverableStarted = new Topic('Deliverable Started', 'DeliverableStarted');
  public static readonly DeliverableCompleted = new Topic('Deliverable Completed', 'DeliverableCompleted');
  public static readonly DeliverableAllocated = new Topic('Deliverable Allocated', 'DeliverableAllocated');
  public static readonly DeliverableReadyToWorkOn = new Topic('Deliverable Ready To Work On', 'DeliverableReadyToWorkOn');
  public static readonly DeliverablePoke = new Topic('Deliverable Poke', 'DeliverablePoke');
  public static readonly DeliverableActions = new Topic('Deliverable Actions', 'DeliverableActions');
  public static readonly DeliverableActionableOnly = new Topic("Deliverable Actionable Only", "DeliverableActionableOnly");
  public static readonly DeliverableMessage = new Topic('Deliverable Message', 'DeliverableMessage');

  public static GetAll(): Topic[] {
    return [Topic.ArticleApproval, Topic.ArticlePublished, Topic.ProductAllocate, Topic.DeliverableStarted, Topic.DeliverableCompleted,
      Topic.DeliverableAllocated, Topic.DeliverableReadyToWorkOn, Topic.DeliverablePoke, Topic.DeliverableActions, Topic.DeliverableMessage, Topic.DeliverableActionableOnly];
  }
}
export class CriteriaDataType extends EnumBase {
  private constructor(name: string, id: string) {
    super(name, id);
  }
  public static readonly Article: CriteriaDataType = new CriteriaDataType("Article", "Article");
  public static readonly Product: CriteriaDataType = new CriteriaDataType("Product", "Product");
  public static readonly Feed: CriteriaDataType = new CriteriaDataType("Feed", "Feed");
  public static readonly Profile: CriteriaDataType = new CriteriaDataType("Profile", "Profile");
  public static readonly ClientProfile: CriteriaDataType = new CriteriaDataType("Client Profile", "ClientProfile");
  public static readonly ContractualAllocation: CriteriaDataType = new CriteriaDataType("Contractual Allocation", "ContractualAllocation");
  public static readonly Writer: CriteriaDataType = new CriteriaDataType("Writer", "Writer");
  public static readonly Pod: CriteriaDataType = new CriteriaDataType("Pod", "Pod");
  public static readonly Section: CriteriaDataType = new CriteriaDataType("Section", "Section");
  public static readonly Account: CriteriaDataType = new CriteriaDataType("Account", "Account");
  public static readonly DeliverableOwner: CriteriaDataType = new CriteriaDataType("Deliverable Owner", "DeliverableOwner");
  public static readonly Deliverable: CriteriaDataType = new CriteriaDataType("Deliverable", "Deliverable");
  public static readonly DeliverableModule: CriteriaDataType = new CriteriaDataType("Deliverable Module", "DeliverableModule");

  public static GetAll(): CriteriaDataType[] {
    return [CriteriaDataType.Article, CriteriaDataType.Product, CriteriaDataType.Feed, CriteriaDataType.Profile, CriteriaDataType.ClientProfile,
    CriteriaDataType.ContractualAllocation, CriteriaDataType.Writer, CriteriaDataType.Pod, CriteriaDataType.Section, CriteriaDataType.Account,
    CriteriaDataType.Deliverable, CriteriaDataType.DeliverableOwner, CriteriaDataType.DeliverableModule
    ];
  }

}

export class TopicDataType extends EnumBase {
  private constructor(name: string, id: string) {
    super(name, id);
  }
  public static readonly Article = new TopicDataType('Article', 'Article');
  public static readonly Product = new TopicDataType('Product', 'Product');
  public static readonly ContractualAllocation = new TopicDataType('Contractual Allocation', 'ContractualAllocation');
  public static readonly Feed = new TopicDataType('Feed', 'Feed');
  public static readonly Account = new TopicDataType('Account', 'Account');
  public static readonly Profile = new TopicDataType('Profile', 'Profile');
  public static readonly ClientProfile = new TopicDataType('Client Profile', 'ClientProfile');
  public static readonly Section = new TopicDataType('Section', 'Section');
  public static readonly Writer = new TopicDataType('Writer', 'Writer');
  public static readonly Pod = new TopicDataType('Pod', 'Pod');
  public static readonly DeliverableOwner = new TopicDataType('Deliverable Owner', 'DeliverableOwner');
  public static readonly Deliverable = new TopicDataType('Deliverable', 'Deliverable');
  public static readonly DeliverableModule = new TopicDataType('Deliverable Module', 'DeliverableModule');

  public static GetAll(): TopicDataType[] {
    return [this.Article, this.Product, this.ContractualAllocation, this.Feed, this.Account, this.Profile, this.ClientProfile,
    this.Section, this.Writer, this.Pod, this.DeliverableOwner, this.Deliverable, this.DeliverableModule];
  }
}


export class LogState extends EnumBase {
  private constructor(name: string, id: string) {
    super(name, id);
  }
  public static readonly MessageQueued = new LogState('Message Queued', 'MessageQueued');
  public static readonly MessageStartedProcessing = new LogState('Message Started Processing', 'MessageStartedProcessing');
  public static readonly ProcessingFailed = new LogState('ProcessingFailed', 'Processing Failed');
  public static readonly ProcessingComplete = new LogState('Processing Complete', 'ProcessingComplete');

  public static GetAll(): LogState[] {
    return [this.MessageQueued, this.MessageStartedProcessing, this.ProcessingFailed, this.ProcessingComplete];
  }
}

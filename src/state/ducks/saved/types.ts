export type SavedState = {
  savedList: {
    items: [
      {
        id: string;
        name: string;
        filters: any;
        prospectsAvailable: number;
        createdAt: string;
        updatedAt: string;
        lastAuthor: {
          id: string;
          email: string;
          firstName: string | null;
          lastName: string | null;
          isAuthorized: boolean;
          imported: boolean;
          teamId: string;
          role: string;
          linkedinLink: string | null;
          isReceivingNotifications: boolean;
          avatarKey: string | null;
          loggedInAt: string | null;
          createdAt: string;
          updatedAt: string;
          deletedAt: string | null;
        };
      },
    ];
    meta: {
      totalItems: number;
      itemCount: number;
      itemsPerPage: string;
      totalPages: number;
      currentPage: string;
    };
  };
};

export type DefaultRejectValue = {
  error: { message: string };
  meta: {
    aborted: boolean;
    arg: {
      id?: string;
    };
    condition: boolean;
    rejectedWithValue: boolean;
    requestId: string;
    requestStatus: string;
  };
  payload: string;
  type: string;
};

export type OneItemState = {
  id: string;
  name: string;
  filters: any;
  prospectsAvailable: number;
  createdAt: string;
  updatedAt: string;
  lastAuthor: {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    isAuthorized: boolean;
    imported: boolean;
    teamId: string;
    role: string;
    linkedinLink: string | null;
    isReceivingNotifications: boolean;
    avatarKey: string | null;
    loggedInAt: string | null;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  };
};

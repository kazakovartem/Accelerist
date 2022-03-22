export type OneLastLoginState = {
  id: string;
  userId: string;
  loggedInAt: string;
  user: {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    isAuthorized: boolean,
    imported: boolean,
    teamId: string;
    role: string;
    linkedinLink: string | null;
    isReceivingNotifications: boolean,
    avatarKey: string | null;
    loggedInAt: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
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

export type LastLoginState = {
  lastLogin: {
    id: string;
    userId: string;
    loggedInAt: string;
    user: {
      id: string;
      email: string;
      firstName: string | null;
      lastName: string | null;
      isAuthorized: boolean,
      imported: boolean,
      teamId: string;
      role: string;
      linkedinLink: string | null;
      isReceivingNotifications: boolean,
      avatarKey: string | null;
      loggedInAt: string;
      createdAt: string;
      updatedAt: string;
      deletedAt: string | null;
    }[]
  };
};

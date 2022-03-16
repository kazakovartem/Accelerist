export type UserState = {
  user: {
    email: string;
    token: string;
    status: null | string;
    id: string;
    firstName: null | string;
    lastName: null | string;
    isAuthorized: boolean;
    role: string;
    teamId: string;
    loggedInAt: string;
    createdAt: string;
    updatedAt: string;
    avatarKey: string | null;
    deletedAt: string | null;
    imported: boolean;
    isReceivingNotifications: boolean;
    linkedinLink: string | null;
  };
};

export type UserResponse = {
  accessToken: string;
  user: {
    email: string;
    token: string;
    id: string;
    firstName: null | string;
    lastName: null | string;
    isAuthorized: boolean;
    role: string;
    teamId: string;
    loggedInAt: string;
    createdAt: string;
    updatedAt: string;
    avatarKey: string | null;
    deletedAt: string | null;
    imported: boolean;
    isReceivingNotifications: boolean;
    linkedinLink: string | null;
  };
};

export type UserSignUpResponse = {
  accessToken: string;
  user: {
    id: string;
    email: string;
    firstName: null | string;
    lastName: null | string;
    isAuthorized: boolean;
    role: string;
    teamId: string;
    loggedInAt: string;
    createdAt: string;
    updatedAt: string;
    avatarKey: string | null;
    imported: boolean;
    isReceivingNotifications: boolean;
    linkedinLink: string | null;
  };
};

export type SignInPayload = {
  email: string;
  password: string;
};

export type SignUpPayload = {
  email: string;
  password: string;
};

export type SendMailPayload = {
  email: string;
};

export type ChangePasswordPayload = {
  passwordConfirm: string;
  password: string;
};

export type AddTokenPayload = {
  token: string;
};

export type DefaultRejectValue = {
  error: { message: string };
  meta: {
    aborted: boolean;
    arg: {
      email?: string;
      password?: string;
    };
    condition: boolean;
    rejectedWithValue: boolean;
    requestId: string;
    requestStatus: string;
  };
  payload: string;
  type: string;
};

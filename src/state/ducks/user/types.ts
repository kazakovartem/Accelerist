export type UserState = {
  user: {
    email: string;
    token: string;
    status: null | string;
    error: null | string;
    id: string;
    firstName: string;
    lastName: string;
    isAuthorized: boolean;
  };
};

export type UserResponse = {
  accessToken: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    isAuthorized: boolean;
    role: string;
    teamId: string;
    loggedInAt: string;
    createdAt: string;
    updatedAt: string;
    avatarKey: string | null;
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

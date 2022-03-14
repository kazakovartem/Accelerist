export type User = {
  email: string;
  token: string;
  status: null | string;
  error: null | string;
  id: string;
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

export enum sizeScreen {
  mobile= '375px',
  tablet= '768px',
  laptop= '1440px',
}

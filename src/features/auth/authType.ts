export interface IRegisterUserData {
  name: string;
  password: string;
  email: string;
}

export interface ILoginUserData {
  password: string;
  email: string;
}

export interface IAuthInitialState {
  user: string;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

export interface IAPiOutput {
  id: string;
  name: string;
  email: string;
  token: string;
}

export interface User {
  name: string;
  email: string;
  id: string;
}

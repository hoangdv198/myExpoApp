import Immutable from 'immutable';

export interface IScreenProps {
  setHudVisible?(visible: boolean): void;
  showAlert?(mess: string): void;
}
export interface IUserLogin {
  username: string;
  password: string;
}
export interface ISocialLogin {
  provider: string;
  access_token: string;
}
export interface IUserRegister {
  username: string;
  email: string;
  password: string;
}
export interface IBaseProps {
  navigation?: any;
  screenProps?: IScreenProps;
  route?: any;
}

export interface IChangePassword {
  old_password: string;
  new_password: string;
  new_password_confirm: string;
}

export interface IRating {
  id: number;
  feedback?: string;
  score?: number;
}

export interface IGetRating {
  isFeedback: boolean;
  score: number;
  feedback: string;
}

export interface IClassProblem {
  details: string;
  problem: number;
  class_id: number;
}

export interface IStudentCourses {
  page: number;
  page_size: number;
}

export enum ESocialType {
  Facebook = 'facebook',
  Google = 'google-oauth2',
  Apple = 'apple-id',
}
export interface IImmutableMap<R> extends Immutable.Map<keyof R, any> {
  toJS(): R;
  get<K extends keyof R>(key: K): R[K];
  set<K extends keyof R>(key: K, value: R[K]): this;
}

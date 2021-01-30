import Immutable from 'immutable';
import { ITypeReduxPendingState } from './redux-type-saga';
import { IImmutableMap } from '../common/interface';

// Store
export interface IStore extends ITypeReduxPendingState {
  appState: IImmutableAppState;
  userState: IImutableUserState;
}
export type IImmutableStore = Immutable.Record<IStore> & Readonly<IStore>;
export type IImmutableAppState = IImmutableMap<IAppState>;
export type IImutableUserState = IImmutableMap<IUserState>;
// AppState
export interface IUserState {
  class: Immutable.List<IImmutableMap<any>>;
  latestClass: Immutable.List<IImmutableMap<any>>;
  userProfile: IImmutableMap<any>;
  problems: Immutable.List<IImmutableMap<any>>;
  comments: Immutable.List<IImmutableMap<IComment>>;
  notifications: Immutable.List<IImmutableMap<any>>;
  courses: Immutable.List<IImmutableMap<any>>;
  currentCourse: IImmutableMap<any>;
}

export enum AppStatus {
  Unload,
  Loading,
  Ready,
}

interface Token {
  access: string;
  refresh: string;
}
interface IComment {
  id: number;
  idClass?: number;
  content: string;
  name: string;
  date: Date;
}
export interface IAppState {
  status: AppStatus;
  loading: boolean;
  token: IImmutableMap<Token>;
}

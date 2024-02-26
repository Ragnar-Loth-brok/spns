export enum RouteConstants {
  Splash = 'Splash',
  Home = 'Home',
}

type RootStackParamList = {
  [RouteConstants.Splash]: undefined;
  [RouteConstants.Home]: undefined;
};

export type {RootStackParamList};

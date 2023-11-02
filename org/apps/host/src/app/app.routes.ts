import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'register-account',
    loadChildren: () =>
      import('register-account/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'mainpage',
    loadChildren: () =>
      import('mainpage/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('account-remote/Module').then((m) => m.RemoteEntryModule),
  },
];

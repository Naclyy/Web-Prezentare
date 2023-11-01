import { Route } from '@angular/router';

export const appRoutes: Route[] = [
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

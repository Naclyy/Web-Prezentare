import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'account-remote',
  exposes: {
    './Module': 'apps/account-remote/src/app/remote-entry/entry.module.ts',
  },
};

export default config;

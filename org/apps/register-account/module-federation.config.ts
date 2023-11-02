import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'register-account',
  exposes: {
    './Module': 'apps/register-account/src/app/remote-entry/entry.module.ts',
  },
};

export default config;

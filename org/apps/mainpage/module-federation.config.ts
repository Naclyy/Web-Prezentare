import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'mainpage',
  exposes: {
    './Module': 'apps/mainpage/src/app/remote-entry/entry.module.ts',
  },
};

export default config;

import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'host',
  remotes: ['account-remote', 'mainpage'],
};

export default config;

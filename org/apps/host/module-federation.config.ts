import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'host',
  remotes: ['account-remote', 'mainpage', 'register-account'],
};

export default config;

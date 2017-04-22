import baseConfig from './base';

const config = {
  appName: 'APP (dev)',
  apiServer: 'http://localhost:8080'
};

export default {
  ...baseConfig,
  ...config
};

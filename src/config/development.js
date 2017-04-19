import baseConfig from './base';

const config = {
  appName: 'APP (dev)',
  apiServer: 'http://192.168.0.104:8080'
};

export default {
  ...baseConfig,
  ...config
};

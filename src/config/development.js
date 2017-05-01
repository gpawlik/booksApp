import baseConfig from './base';

const config = {
  appName: 'APP (dev)',
  apiServer: 'http://192.168.1.36:8080'
};

export default {
  ...baseConfig,
  ...config
};

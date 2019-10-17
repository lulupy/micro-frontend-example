let config = {
  apiUrl: '默认apiUrl',
};

export const getConfig = () => config;

export const setConfig = (customConfig) => {
  config = {
    ...config,
    ...customConfig,
  };
};

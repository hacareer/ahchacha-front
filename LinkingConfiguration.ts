import {ILinkingConfiguration} from './types/types';

const config: ILinkingConfiguration = {
  prefixes: [],
  config: {
    screens: {
      Hospital: {
        screens: {
          Detail: {
            path: 'hospital/detail/:hospitalID',
            parse: {
              key: (hospitalID: number) => `hospital-detail-${hospitalID}`,
            },
          },
        },
      },
    },
  },
};
export default config;

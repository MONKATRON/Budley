import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.budley.app',
  appName: 'Budley',
  webDir: '../../dist/apps/budley-app',
  server: {
    androidScheme: 'https'
  }
};

export default config;

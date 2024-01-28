import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.registrapp.app',
  appName: 'RegistrAPP',
  webDir: 'www/browser',
  server: {
    androidScheme: 'http'
  }
};

export default config;

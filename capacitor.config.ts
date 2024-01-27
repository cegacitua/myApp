import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.registrapp.app',
  appName: 'RegistrAPP',
  webDir: 'www/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;

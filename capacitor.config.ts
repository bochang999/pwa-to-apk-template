import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.pwatemplate',
  appName: 'PWA Template',
  webDir: 'dist',
  plugins: {
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#2C3E50',
      overlaysWebView: false
    }
  },
  android: {
    allowMixedContent: true
  }
};

export default config;
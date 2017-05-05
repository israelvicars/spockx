import { Platform } from 'react-native';

const DEFAULT_FAMILY = Platform.select({
  ios: 'Arial',
  android: 'Roboto',
});

export { DEFAULT_FAMILY };

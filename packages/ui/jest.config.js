// Component tests (React Native). Pure tests in test/ run with Vitest.
export default {
  preset: 'jest-expo',
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.test.tsx'],
  // jest-expo's defaults plus the icon and sheet libraries, which ship untranspiled sources.
  transformIgnorePatterns: [
    '/node_modules/(?!(.pnpm|react-native|@react-native|@react-native-community|expo|@expo|@expo-google-fonts|react-navigation|@react-navigation|@sentry/react-native|native-base|standard-navigation|phosphor-react-native|@gorhom))',
    '/node_modules/react-native-reanimated/plugin/',
    '/node_modules/@react-native/babel-preset/',
  ],
};

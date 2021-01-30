import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { store } from './redux/store';
import i18next from './locales/i18n';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <I18nextProvider i18n={i18next}>
          <Provider store={store}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar style="light" />
          </Provider>
        </I18nextProvider>
      </SafeAreaProvider>
    );
  }
}

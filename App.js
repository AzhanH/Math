import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AnimatedSplash from 'react-native-animated-splash';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/state';
import {StatusBar} from 'react-native';
import Toast from 'react-native-toast-message';
import MainNavigation from './src/navigation/MainNavigator';
const App = () => {
  useEffect(() => {
    AnimatedSplash.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <StatusBar
            barStyle={'dark-content'}
            translucent
            backgroundColor={'transparent'}
          />
          <MainNavigation />
          <Toast />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default App;

import React, {useState} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation';
import RNBootSplash from 'react-native-bootsplash';
import {Provider as ReduxProvider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/redux/reducers';
import LinkingConfiguration from './LinkingConfiguration';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return <RootNavigator />;
};

const Navigation = () => {
  const [ready, setReady] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  function handleNavigationReady() {
    setReady(true);
    // hide boot splash
    RNBootSplash.hide();
  }
  return (
    <ReduxProvider store={createStore(reducers)}>
      <PaperProvider>
        <SafeAreaProvider>
          <StatusBar
            animated={true}
            backgroundColor={isDarkMode ? 'black' : 'white'}
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          />
          <NavigationContainer
            onReady={handleNavigationReady}
            linking={LinkingConfiguration}>
            {ready && <App />}
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    </ReduxProvider>
  );
};

export default Navigation;

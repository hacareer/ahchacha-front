import React, {useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation';
const App = () => {
  return <RootNavigator />;
};

const Navigation = () => {
  const [ready, setReady] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <NavigationContainer onReady={() => setReady(true)}>
        <StatusBar
          animated={true}
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        {ready && App}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Navigation;

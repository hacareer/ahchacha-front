import * as React from 'react';
import {RegisterParamList} from '../../types/types';
import RegisterMainScreen from '../screens/AppScreens/RegisterScreens/RegisterMainScreen';
import RegisterHangOutsScreen from '../screens/AppScreens/RegisterScreens/RegisterHangOutsScreen';
import RegisterSchoolScreen from '../screens/AppScreens/RegisterScreens/RegisterSchoolScreen';
import RegisterVaccinatedScreen from '../screens/AppScreens/RegisterScreens/RegisterVaccinatedScreen';
import RegisterNicknameScreen from '../screens/AppScreens/RegisterScreens/RegisterNicknameScreen';
import RegisterTermsScreen from '../screens/AppScreens/RegisterScreens/RegisterTermsScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {Animated, View} from 'react-native';
let cp = 'Main';
const RegisterProgress = createStackNavigator();
export default function RegisterProgressNavigator({navigation, route}) {
  const [progressValue, setProgressValue] = React.useState(1);
  const animatingProgressBar = React.useRef(new Animated.Value(0));
  React.useEffect(() => {
    Animated.timing(animatingProgressBar.current, {
      toValue: progressValue,
      // delay: animDelay,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [progressValue]);

  const ProgressBar = (
    <Animated.View
      style={{
        backgroundColor: 'yellow',
        width: animatingProgressBar.current,
        height: 8,
      }}
    />
  );
  React.useEffect(() => {
    switch (cp) {
      case 'Main':
        console.log('running...');
        // animatingProgressBar.current.setValue(1);
        setProgressValue(1);
        break;
      case 'Terms':
        console.log('running...');
        setProgressValue(2);
        break;
      case 'Nickname':
        console.log('running...');
        setProgressValue(3);
        break;
      case 'Vaccinated':
        console.log('running...');
        setProgressValue(4);
        break;
      case 'School':
        console.log('running...');
        setProgressValue(5);
        break;
      case 'HangOuts':
        console.log('running...');
        setProgressValue(6);
        break;
    }
  }, [navigation, route]);
  return (
    <RegisterProgress.Navigator
      screenOptions={{
        header: () => ProgressBar,
      }}>
      <RegisterProgress.Screen
        name="RegisterNav"
        component={RegisterNavigator}
      />
    </RegisterProgress.Navigator>
  );
}
interface IRegisterNavigationProps {
  setCurrentRoute: React.Dispatch<React.SetStateAction<string>>;
}
const Register = createStackNavigator<RegisterParamList>();
function RegisterNavigator(props: IRegisterNavigationProps) {
  return (
    <Register.Navigator
      screenOptions={({route}) => {
        cp = route.name;
        return {headerShown: false};
      }}>
      <Register.Screen name="Main" component={RegisterMainScreen} />
      <Register.Screen name="Terms" component={RegisterTermsScreen} />
      <Register.Screen name="Nickname" component={RegisterNicknameScreen} />
      <Register.Screen name="Vaccinated" component={RegisterVaccinatedScreen} />
      <Register.Screen name="School" component={RegisterSchoolScreen} />
      <Register.Screen name="HangOuts" component={RegisterHangOutsScreen} />
    </Register.Navigator>
  );
}

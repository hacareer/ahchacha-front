import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RegisterParamList} from '../../types/types';
import RegisterMainScreen from '../screens/AppScreens/RegisterScreens/RegisterMainScreen';
import RegisterHangOutsScreen from '../screens/AppScreens/RegisterScreens/RegisterHangOutsScreen';
import RegisterSchoolScreen from '../screens/AppScreens/RegisterScreens/RegisterSchoolScreen';
import RegisterVaccinatedScreen from '../screens/AppScreens/RegisterScreens/RegisterVaccinatedScreen';
import RegisterNicknameScreen from '../screens/AppScreens/RegisterScreens/RegisterNicknameScreen';
import RegisterTermsScreen from '../screens/AppScreens/RegisterScreens/RegisterTermsScreen';

const Register = createBottomTabNavigator<RegisterParamList>();
export default function RegisterNavigator() {
  return (
    <Register.Navigator>
      <Register.Screen name="Main" component={RegisterMainScreen} />
      <Register.Screen name="Terms" component={RegisterTermsScreen} />
      <Register.Screen name="Nickname" component={RegisterNicknameScreen} />
      <Register.Screen name="Vaccinated" component={RegisterVaccinatedScreen} />
      <Register.Screen name="School" component={RegisterSchoolScreen} />
      <Register.Screen name="HangOuts" component={RegisterHangOutsScreen} />
    </Register.Navigator>
  );
}

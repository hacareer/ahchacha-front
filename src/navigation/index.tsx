import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/types';
import BottomTabNavigator from './BottomTabNavigator';
import RegisterNavigator from './RegisterNavigator';
import HospitalNavigator from './HospitalNavigator';

const Stack = createStackNavigator<RootStackParamList>();
export default function RootNavigator() {
  const screenOptions = {headerShown: false};
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Register" component={RegisterNavigator} />
      <Stack.Screen name="Hospital" component={HospitalNavigator} />
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

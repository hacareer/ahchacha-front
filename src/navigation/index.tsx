import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/types';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator<RootStackParamList>();
export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

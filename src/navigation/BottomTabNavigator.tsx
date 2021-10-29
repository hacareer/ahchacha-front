import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../../types/types';
import MainScreen from '../screens/AppScreens/TabScreens/MainScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Main" component={MainScreen} />
    </BottomTab.Navigator>
  );
}

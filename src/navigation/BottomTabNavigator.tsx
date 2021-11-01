import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../../types/types';
import TabMainScreen from '../screens/AppScreens/TabScreens/TabMainScreen';
import TabMapScreen from '../screens/AppScreens/TabScreens/TabMapScreen';
import TabCalendarScreen from '../screens/AppScreens/TabScreens/TabCalendarScreen';
import TabSchoolScreen from '../screens/AppScreens/TabScreens/TabSchoolScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Main" component={TabMainScreen} />
      <BottomTab.Screen name="Map" component={TabMapScreen} />
      <BottomTab.Screen name="Calendar" component={TabCalendarScreen} />
      <BottomTab.Screen name="School" component={TabSchoolScreen} />
    </BottomTab.Navigator>
  );
}

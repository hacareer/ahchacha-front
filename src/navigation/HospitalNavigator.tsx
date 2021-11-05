import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {HospitalParamList} from '../../types/types';
import HospitalDetailScreen from '../screens/AppScreens/HospitalScreens/HospitalDetailScreen';
import HospitalListScreen from '../screens/AppScreens/HospitalScreens/HospitalListScreen';
import HospitalReviewScreen from '../screens/AppScreens/HospitalScreens/HospitalReviewScreen';

const Hospital = createStackNavigator<HospitalParamList>();
export default function HospitalNavigator() {
  return (
    <Hospital.Navigator>
      <Hospital.Screen name="Detail" component={HospitalDetailScreen} />
      <Hospital.Screen name="List" component={HospitalListScreen} />
      <Hospital.Screen name="Review" component={HospitalReviewScreen} />
    </Hospital.Navigator>
  );
}

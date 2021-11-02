import {useScrollToTop} from '@react-navigation/native';
import * as React from 'react';
import {ScrollView, Text, View} from 'react-native';

export default function TabMainScreen() {
  const scrollViewRef = React.useRef<ScrollView>(null);
  useScrollToTop(scrollViewRef);
  return <ScrollView ref={scrollViewRef}></ScrollView>;
}

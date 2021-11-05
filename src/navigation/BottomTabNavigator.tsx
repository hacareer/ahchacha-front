import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../../types/types';
import TabMainScreen from '../screens/AppScreens/TabScreens/TabMainScreen';
import TabMapScreen from '../screens/AppScreens/TabScreens/TabMapScreen';
import TabCalendarScreen from '../screens/AppScreens/TabScreens/TabCalendarScreen';
import TabSchoolScreen from '../screens/AppScreens/TabScreens/TabSchoolScreen';
import BottomTab_ from '../components/BottomTab/BottomTab';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import Icon from '../components/Atoms/Icon';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{lazy: false}}
      // tabBar={props => <BottomTab_ {...props} />}
    >
      <BottomTab.Screen
        name="Main"
        component={TabMainScreen}
        options={{header: () => <Header />}}
      />
      <BottomTab.Screen name="Map" component={TabMapScreen} />
      <BottomTab.Screen name="Calendar" component={TabCalendarScreen} />
      <BottomTab.Screen name="School" component={TabSchoolScreen} />
    </BottomTab.Navigator>
  );
}

const Header = () => {
  const [showLocationDrawer, setShowLocationDrawer] = React.useState(false);
  const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: 68,
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'flex-end',
      overflow: 'visible',
      position: 'relative',
    },
    locationWrap: {
      marginLeft: 21,
      marginBottom: 16,
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
  const LocationDrawer = (
    <Drawer style={{left: 21, top: 68 - 7}}>
      <DrawerItem text="서대문구 신촌로" />
      <DrawerItem
        isTextOnly={false}
        style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Icon
          name="search-outline"
          size={20}
          style={{paddingRight: 4}}
          noPadding
          isPressable={false}
        />
        <Text style={{fontSize: 17}}>다른 주소 검색</Text>
      </DrawerItem>
    </Drawer>
  );
  const handleLocationPress = () => setShowLocationDrawer(prev => !prev);
  return (
    <View
      style={styles.header}
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={() => setShowLocationDrawer(false)}
      onResponderMove={() => setShowLocationDrawer(false)}>
      <Pressable style={styles.locationWrap} onPress={handleLocationPress}>
        <Text children="서대문구 신촌로" style={{fontSize: 20}} />
        <Icon name="chevron-down-outline" size={16} isPressable={false} />
      </Pressable>
      {showLocationDrawer && LocationDrawer}
    </View>
  );
};
interface IDrawer {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}
const Drawer = ({style, children}: IDrawer) => {
  const styles = StyleSheet.create({
    wrap: {
      width: 150,
      position: 'absolute',
      zIndex: 1000,
    },
  });
  return <View style={[styles.wrap, style]} children={children} />;
};
interface IDrawerItem {
  children?: React.ReactNode;
  isTextOnly?: boolean;
  text?: string;
  style?: StyleProp<ViewStyle>;
}
const DrawerItem = (props: IDrawerItem) => {
  const {children, isTextOnly = true, text, style} = props;
  const styles = StyleSheet.create({
    itemWrap: {
      width: 150,
      height: 57,
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#F2F2F2',
      alignItems: 'center',
    },
    itemText: {
      width: 150,
      fontSize: 18,
      textAlign: 'center',
    },
  });
  return (
    <View style={[styles.itemWrap, style]}>
      {isTextOnly ? <Text style={styles.itemText} children={text} /> : children}
    </View>
  );
};

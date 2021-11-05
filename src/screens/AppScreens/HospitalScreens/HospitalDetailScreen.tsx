import {useNavigation} from '@react-navigation/core';
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../../../components/Atoms/Button';

export default function HospitalDetailScreen() {
  const navigation = useNavigation();
  function setNavigationConfig() {
    navigation.setOptions({
      // header: () => <Header />,
      headerTitle: () => <Header />,
      headerTitleAlign: 'center',
      headerTitleStyle: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerStyle: {
        height: 68,
      },
    });
  }
  const styles = StyleSheet.create({
    map: {
      height: 209,
    },
    remainingTimeWrap: {
      height: 107,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: 20,
      paddingLeft: 20,
      backgroundColor: 'white',
    },
  });
  React.useEffect(() => {
    setNavigationConfig();
  }, []);
  return (
    <View>
      <View style={styles.map} />
      <View style={styles.remainingTimeWrap}>
        <View>
          <Text style={{fontSize: 12, marginBottom: 2}}>예상 대기 시간</Text>
          <Text style={{fontSize: 20}}>1시간</Text>
        </View>
        <Button
          text="길찾기"
          style={{width: 138, height: 40}}
          textStyle={{fontSize: 12}}
        />
      </View>
    </View>
  );
}
const Header = () => {
  const styles = StyleSheet.create({
    headerTitleWrap: {},
    headerTitle: {
      fontSize: 20,
    },
    headerSubTitle: {
      fontSize: 12,
    },
  });
  return (
    <View style={styles.headerTitleWrap}>
      <Text children="서대문구 보건소" style={styles.headerTitle} />
      <Text children="서대문구 신촌대로32길 12" style={styles.headerSubTitle} />
    </View>
  );
};

import {useLinkTo, useScrollToTop} from '@react-navigation/native';
import * as React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import Button from '../../../components/Atoms/Button';

export default function TabMainScreen() {
  const scrollViewRef = React.useRef<ScrollView>(null);
  useScrollToTop(scrollViewRef);
  const styles = StyleSheet.create({
    mainBanner: {
      height: 368,
      backgroundColor: '#E8E8E8',
      flexDirection: 'row',
      alignItems: 'flex-end',
      paddingLeft: 20,
      paddingBottom: 40,
    },
    mainBannerText: {
      fontSize: 24,
    },
    remainingBarWrap: {
      height: 368,
      backgroundColor: 'white',
      paddingTop: 32,
      paddingBottom: 32,
    },
    remainingBar: {
      height: 224,
    },
    hospitalView: {
      height: 308,
      paddingTop: 33,
      paddingLeft: 20,
    },
    hospitalViewTitle: {
      fontSize: 20,
    },
  });
  const HospitalScrollView = (
    <ScrollView horizontal nestedScrollEnabled>
      <HosPitalCardView name="서강대역사 앞 검사소" location="서울시 성동구" />
      <HosPitalCardView name="서강대역사 앞 검사소" location="서울시 성동구" />
      <HosPitalCardView name="서강대역사 앞 검사소" location="서울시 성동구" />
    </ScrollView>
  );
  return (
    <ScrollView ref={scrollViewRef}>
      <View style={styles.mainBanner}>
        <Text
          style={styles.mainBannerText}
          children={`소희님의\n코로나 검사결과 유효기한이\n4시간 남았어요`}
        />
      </View>
      <View style={styles.remainingBarWrap}>
        <View style={styles.remainingBar} />
        <Button text="알람 예약" style={{marginLeft: 20, marginRight: 20}} />
      </View>
      <View style={styles.hospitalView}>
        <Text
          style={styles.hospitalViewTitle}
          children="내 주변 가장 가까운 검사소"
        />
        {HospitalScrollView}
      </View>
    </ScrollView>
  );
}
function HosPitalCardView(props) {
  const {name, location} = props;
  const linkTo = useLinkTo();
  const styles = StyleSheet.create({
    wrap: {
      width: 256,
      height: 180,
    },
    image: {
      width: 256,
      height: 116,
    },
    infoWrap: {
      marginTop: 10,
      marginLeft: 10,
    },
    name: {
      fontSize: 18,
      marginBottom: 2,
    },
    location: {
      fontSize: 12,
    },
  });
  function handlePress() {
    linkTo('/hospital/detail/12');
  }
  return (
    <Pressable style={styles.wrap} onPress={handlePress}>
      <View style={styles.image} />
      <View style={styles.infoWrap}>
        <Text style={styles.name} children={name} numberOfLines={1} />
        <Text style={styles.location} children={location} numberOfLines={1} />
      </View>
    </Pressable>
  );
}

import * as React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import Button from '../../../components/Atoms/Button';
import {
  RegisterTemplateContent,
  RegisterTemplateTitle,
} from '../../../components/Register/RegisterTemplate';
import Postcode from '@actbase/react-daum-postcode';
import {useNavigation} from '@react-navigation/core';

export default function RegisterHangOutsScreen() {
  const navigation = useNavigation();
  const [addressData, setAddressData] = React.useState({});
  function handleSearchAddressPress() {}
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <RegisterTemplateTitle
        title={`자주 가는 곳의 주소를 입력해주세요\n[서비스명]이 근처 검사소를 찾아드릴게요`}
      />
      <RegisterTemplateContent>
        <TextInput
          value={addressData.address}
          onPress={handleSearchAddressPress}
        />
        <Postcode
          style={{width: '100%', height: 320}}
          jsOptions={{animation: true}}
          onSelected={data => setAddressData(data)}
          onError={error => {
            console.log(error);
          }}
        />
      </RegisterTemplateContent>
      <Button
        text="입력 완료"
        style={{position: 'absolute', bottom: 0, width: '100%'}}
        onPress={() =>
          navigation.navigate('BottomTab', {
            screen: 'Main',
          })
        }
      />
    </View>
  );
}

import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import * as React from 'react';
import {View} from 'react-native';
import {RegisterParamList} from '../../../../types/types';
import Button from '../../../components/Atoms/Button';
import {RegisterTemplateTitle} from '../../../components/Register/RegisterTemplate';

export default function RegisterVaccinatedScreen() {
  const navigation = useNavigation<StackNavigationProp<RegisterParamList>>();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <RegisterTemplateTitle
        title={`[닉네임]님은\n2차 백신 접종을 마치셨나요?`}
      />
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
        }}>
        <Button
          text="네"
          style={{flex: 1}}
          onPress={() => navigation.navigate('School')}
        />
        <Button
          text="아직이요"
          style={{flex: 1}}
          onPress={() => navigation.navigate('School')}
        />
      </View>
    </View>
  );
}

import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import * as React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {RegisterParamList} from '../../../../types/types';
import Button from '../../../components/Atoms/Button';
import {
  RegisterTemplateContent,
  RegisterTemplateTitle,
} from '../../../components/Register/RegisterTemplate';

export default function RegisterNicknameScreen() {
  const navigation = useNavigation<StackNavigationProp<RegisterParamList>>();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <RegisterTemplateTitle title="닉네임을 입력해주세요" />
      <RegisterTemplateContent>
        <TextInput />
      </RegisterTemplateContent>
      <Button
        text="다음"
        style={{position: 'absolute', bottom: 0, width: '100%'}}
        onPress={() => navigation.navigate('Vaccinated')}
      />
    </View>
  );
}

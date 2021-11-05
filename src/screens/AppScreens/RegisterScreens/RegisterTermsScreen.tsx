import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import * as React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {RegisterParamList} from '../../../../types/types';
import Button from '../../../components/Atoms/Button';
import {
  RegisterTemplateContent,
  RegisterTemplateTitle,
} from '../../../components/Register/RegisterTemplate';

export default function RegisterTermsScreen() {
  const navigation = useNavigation<StackNavigationProp<RegisterParamList>>();
  const [checked, setChecked] = React.useState(false);
  function handleCheckboxPress() {
    setChecked(prev => !prev);
  }
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <RegisterTemplateTitle
        title={`{우리 서비스} 이용을 위해 \n약관에 동의해주세요`}
      />
      <RegisterTemplateContent>
        <Pressable style={styles.checkboxWrap} onPress={handleCheckboxPress}>
          <Checkbox status={checked ? 'checked' : 'unchecked'} />
          <Text
            children="{우리 서비스} 약관에 동의합니다."
            style={styles.checkboxText}
          />
        </Pressable>
      </RegisterTemplateContent>
      <Button
        text="다음"
        style={{position: 'absolute', bottom: 0, width: '100%'}}
        disabled={!checked}
        onPress={() => navigation.navigate('Nickname')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  checkboxWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {fontFamily: 'AppleSDGothicNeo-Regular'},
});

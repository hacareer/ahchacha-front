import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import * as React from 'react';
import {View} from 'react-native';
import {RegisterParamList} from '../../../../types/types';
import Button from '../../../components/Atoms/Button';
interface IProps {}
type Props = StackScreenProps<RegisterParamList, 'Main'>;

export default function RegisterMainScreen(props: Props & IProps) {
  const navigation = useNavigation<StackNavigationProp<RegisterParamList>>();
  const {route} = props;

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Button text="다음" onPress={() => navigation.navigate('Terms')} />
    </View>
  );
}

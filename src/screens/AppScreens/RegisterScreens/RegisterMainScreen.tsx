import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import * as React from 'react';
import {Text, View} from 'react-native';
import {RegisterParamList} from '../../../../types/types';
import {Button} from '../../../components';
interface IProps {}
type Props = StackScreenProps<RegisterParamList, 'Main'>;

export default function RegisterMainScreen(props: Props & IProps) {
  const {route} = props;
  const navigation = useNavigation();

  return (
    <View>
      <Text>qoweihegiw</Text>
      <Text>qoweihegiw</Text>
      <Text>qoweihegiw</Text>
      <Text>qoweihegiw</Text>
      <Text>qoweihegiw</Text>
      <Button text="다음" onPress={() => navigation.navigate('Terms')} />
    </View>
  );
}

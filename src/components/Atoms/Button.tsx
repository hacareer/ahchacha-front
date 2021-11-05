import * as React from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';
import Colors from '../../../constants/Colors';

export default function Button({
  text,
  backgroundColor = '#D3D3D3',
  color = '#606060',
  onPress,
  style,
  textStyle,
  disabled = false,
}: {
  text: string;
  backgroundColor?: string;
  color?: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
}) {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = StyleSheet.create({
    container: {
      backgroundColor: backgroundColor,
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: color,
      fontFamily: 'AppleSDGothicNeo-Regular',
      fontSize: 24,
    },
  });
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        style,
        disabled && {
          backgroundColor:
            Colors[isDarkMode ? 'dark' : 'light']?.disabledBackground,
        },
      ]}>
      <Text
        style={[
          styles.text,
          textStyle,
          disabled && {
            color: Colors[isDarkMode ? 'dark' : 'light']?.disabledColor,
          },
        ]}>
        {text}
      </Text>
    </Pressable>
  );
}

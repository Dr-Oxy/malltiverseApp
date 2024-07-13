// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from '@expo/vector-icons/Ionicons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';
import { Image, View } from 'react-native';

export function TabBarIcon({
  style,
  ...rest
}: IconProps<ComponentProps<typeof Ionicons>['name']>) {
  return <Ionicons size={24} style={style} {...rest} />;
}

interface IconProp {
  source: any;
}

export function TabIcon({ source }: IconProp) {
  return (
    <Image
      source={source}
      style={{ width: 20, height: 20, resizeMode: 'cover' }}
    />
  );
}

// <Image source={require('./assets/images/slack-icon.png')}

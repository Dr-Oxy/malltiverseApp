/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#292D32';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#FAFAFA',
    tint: tintColorLight,
    icon: '#687076',
    tabBackground: '#2A2A2A',
    tabIconDefault: '#ffffff',
    tabIconSelected: tintColorLight,
    primaryColor: '#FF7F7D',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    tabBackground: '#2A2A2A',
    icon: '#9BA1A6',
    tabIconDefault: '#ffffff',
    tabIconSelected: tintColorDark,
    primaryColor: '#FF7F7D',
  },
};

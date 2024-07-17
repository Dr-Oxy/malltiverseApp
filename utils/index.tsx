import { useNavigation } from '@react-navigation/native';

import { NavigationProps } from './@types/context';

const navigation = useNavigation<NavigationProps>();

export const movePage = (pageName: string) => {
  navigation.navigate(pageName);
};

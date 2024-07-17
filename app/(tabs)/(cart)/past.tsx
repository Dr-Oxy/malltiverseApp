import { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Image,
  ScrollView,
  SafeAreaView,
  Pressable,
  View,
  Text,
  TextInput,
} from 'react-native';

import { Header, CartTab } from '@/components';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

import { AppContext } from '@/utils/appContext';
import { styles } from '@/styles/cart';

import { NavigationProps } from '@/utils/@types/context';

const PastOrders = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Header text="My Cart" />
      <CartTab />
    </SafeAreaView>
  );
};

export default PastOrders;

import { useContext, useState } from 'react';

import {
  Image,
  ScrollView,
  SafeAreaView,
  Pressable,
  View,
  Text,
  TextInput,
} from 'react-native';

import { Header } from '@/components';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

import { AppContext } from '@/utils/appContext';
import { styles } from '@/styles/cart';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Header text="Product Listing" />

      <ScrollView style={styles.checkout}>
        <View>
          <Text>Hello</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

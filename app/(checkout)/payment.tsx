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

import { TabBarIcon } from '@/components/navigation/TabBarIcon';

import { AppContext } from '@/utils/appContext';
import { styles } from '@/styles/cart';

import { NavigationProps } from '@/utils/@types/context';

const Payment = () => {
  const navigation = useNavigation<NavigationProps>();
  const { cart, setCart, onDelete, onAdd, onRemove } = useContext(AppContext);

  const movePage = () => {
    navigation.navigate('success');
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <TabBarIcon size={18} name="arrow-back" color="black" />
        <Text style={styles.headerText}>Payment</Text>
      </View>

      <ScrollView style={styles.checkout}>
        <View>
          <Image
            style={styles.hero}
            source={require('@/assets/images/Card.png')}
          />

          <Text style={styles.cardLead}>Card Number</Text>
          <TextInput
            placeholder="0000 0000 0000 0000"
            style={styles.inputField}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 22,
              marginTop: 24,
            }}
          >
            <View style={{ flex: 0.5 }}>
              <Text style={styles.cardLead}>Expiry Date</Text>
              <TextInput placeholder="MM/YY" style={styles.inputField} />
            </View>

            <View style={{ flex: 0.5 }}>
              <Text style={styles.cardLead}>CVV</Text>
              <TextInput placeholder="123" style={styles.inputField} />
            </View>
          </View>

          <Pressable onPress={movePage} style={styles.totalButton}>
            <Text style={styles.buttonText}>Make Payment </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Payment;

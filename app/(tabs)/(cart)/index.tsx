import { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  ScrollView,
  SafeAreaView,
  Pressable,
  View,
  Text,
  TextInput,
} from 'react-native';

import { Header, CartTab, CartCard } from '@/components';

import { AppContext } from '@/utils/appContext';
import { NavigationProps, Item } from '@/utils/@types/context';

import { styles } from '@/styles/cart';

export default function Cart() {
  const navigation = useNavigation<NavigationProps>();
  const movePage = () => {
    navigation.navigate('payment');
  };

  const { cart, deliveryFee } = useContext(AppContext);
  const [discount, setDiscount] = useState('');

  //Total cart
  const sumPrice = cart.reduce(
    (price, item) => price + item.qty * item.current_price[0]?.USD[0],
    0,
  );

  const subTotal = new Intl.NumberFormat().format(sumPrice);
  const total = new Intl.NumberFormat().format(deliveryFee + sumPrice);

  return (
    <SafeAreaView style={styles.wrapper}>
      <Header text="My Cart" />
      <CartTab />

      {cart?.length === 0 ? (
        <View style={styles.emptyCart}>
          <Text style={styles.emptyText}> No Item in Cart.</Text>
        </View>
      ) : (
        <ScrollView style={styles.checkout}>
          <View style={{ flex: 1 }}>
            {cart?.map((item) => (
              <CartCard item={item} />
            ))}

            <View style={styles.totalWrap}>
              <Text style={styles.headingT}>Shopping Summary</Text>

              <Text style={styles.lead}>Discount Code</Text>

              <View style={styles.discount}>
                <TextInput
                  value={discount}
                  onChangeText={(item) => setDiscount(item)}
                  style={styles.inputField}
                />

                <Pressable style={styles.discountButton}>
                  <Text style={styles.lead}>Apply </Text>
                </Pressable>
              </View>

              <View style={styles.wrapT}>
                <Text style={styles.subT}>Sub-Total</Text>
                <Text style={styles.lead}>${subTotal}</Text>
              </View>

              <View style={styles.wrapT}>
                <Text style={styles.subT}>Delivery Fee</Text>
                <Text style={styles.lead}>${deliveryFee}</Text>
              </View>

              <View style={styles.wrapT}>
                <Text style={styles.subT}>Discount Amount</Text>
                <Text style={styles.lead}>0</Text>
              </View>

              <View style={styles.totalPriceWrap}>
                <Text style={styles.subT}>Total Amount</Text>
                <Text style={styles.lead}>${total}</Text>
              </View>

              <Pressable onPress={movePage} style={styles.totalButton}>
                <Text style={styles.buttonText}>Checkout </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

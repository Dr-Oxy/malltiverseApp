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

export default function Cart() {
  const { cart, setCart, onDelete, onAdd, onRemove } = useContext(AppContext);
  const [discount, setDiscount] = useState('');

  const deliveryFee = 15;

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

      {cart?.length === 0 ? (
        <View style={styles.emptyCart}>
          <Text style={styles.emptyText}> No Item in Cart.</Text>
        </View>
      ) : (
        <ScrollView style={styles.checkout}>
          {cart?.map((item) => (
            <View style={styles.cartCard} key={item.id}>
              <View>
                <Image
                  style={styles.cardImg}
                  source={{
                    uri: `https://api.timbu.cloud/images/${item?.photos[0]?.url}`,
                  }}
                />
              </View>

              <View style={styles.cardGroup}>
                <View style={[styles.cardFlex, { marginBottom: 10, gap: 32 }]}>
                  <View style={styles.cardText}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.sub}>{item.description}</Text>
                  </View>

                  <View>
                    <Pressable
                      onPress={() => onDelete(item)}
                      style={styles.delButton}
                    >
                      <TabBarIcon
                        size={18}
                        name="trash-outline"
                        color="black"
                      />
                    </Pressable>
                  </View>
                </View>

                <View style={[styles.cardFlex, { alignItems: 'center' }]}>
                  <View style={styles.qtyWrap}>
                    <Pressable
                      onPress={() => onRemove(item)}
                      style={styles.qtyButton}
                    >
                      <TabBarIcon size={17} name="remove" color="black" />
                    </Pressable>

                    <Text style={styles.qtyText}>{item?.qty}</Text>

                    <Pressable
                      onPress={() => onAdd(item)}
                      style={styles.qtyButton}
                    >
                      <TabBarIcon size={17} name="add" color="black" />
                    </Pressable>
                  </View>

                  <Text style={styles.price}>
                    ${item.current_price[0]?.USD[0] * item.qty}
                  </Text>
                </View>
              </View>
            </View>
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

            <Pressable style={styles.totalButton}>
              <Text style={styles.buttonText}>Checkout </Text>
            </Pressable>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

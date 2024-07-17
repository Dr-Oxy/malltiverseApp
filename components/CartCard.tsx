import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

import { TabBarIcon } from './navigation/TabBarIcon';

import { AppContext } from '@/utils/appContext';
import { Item } from '@/utils/@types/context';

const CartCard = ({ item }: any) => {
  const { handleUpdate, onDelete } = useContext(AppContext);

  return (
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
            <Pressable onPress={() => onDelete(item)} style={styles.delButton}>
              <TabBarIcon size={18} name="trash-outline" color="black" />
            </Pressable>
          </View>
        </View>

        <View style={[styles.cardFlex, { alignItems: 'center' }]}>
          <View style={styles.qtyWrap}>
            <Pressable
              onPress={() =>
                handleUpdate({ product: item, action: 'decrease' })
              }
              style={styles.qtyButton}
            >
              <TabBarIcon size={17} name="remove" color="black" />
            </Pressable>

            <Text style={styles.qtyText}>{item?.qty}</Text>

            <Pressable
              onPress={() =>
                handleUpdate({ product: item, action: 'increase' })
              }
              style={styles.qtyButton}
            >
              <TabBarIcon size={17} name="add" color="black" />
            </Pressable>
          </View>

          <Text style={styles.price}>
            ${item?.current_price[0]?.USD[0] * item?.qty}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  cartCard: {
    borderWidth: 1,
    borderColor: 'rgba(42, 42, 42, 0.1)',
    paddingVertical: 28,
    paddingHorizontal: 15,
    marginBottom: 21,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
  },

  cardImg: {
    height: 78,
    width: 60,
    resizeMode: 'cover',
  },

  cardGroup: {
    flex: 1,
  },

  cardFlex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cardText: {
    flex: 1,
  },

  title: {
    color: '#2A2A2A',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Montserrat-Medium',
  },

  sub: {
    fontSize: 11,
    fontFamily: 'Montserrat-Regular',
    color: '#2A2A2A',
    fontWeight: '400',
    marginTop: 4,
    marginBottom: 12,
  },

  delButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  qtyWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 21,
    flex: 1,
  },

  qtyButton: {
    alignSelf: 'flex-start',
    padding: 4,
    borderColor: '#2A2A2A',
    borderWidth: 1,
  },

  qtyText: {
    fontSize: 12,
    color: '#2A2A2A',
    fontWeight: '600',
    fontFamily: 'Montserrat-SemiBold',
  },

  price: {
    color: '#2A2A2A',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
  },
});

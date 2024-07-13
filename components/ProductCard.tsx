import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import { Item } from '@/utils/@types/context';

import { FontAwesome } from '@expo/vector-icons';

type ItemProps = {
  item: Item;
  onPress: () => void;
};

const ProductCard = ({ item, onPress }: ItemProps) => {
  return (
    <View style={styles.productWrapper}>
      <View style={styles.imgWrap}>
        <Image
          source={{
            uri: `https://api.timbu.cloud/images/${item?.photos[0]?.url}`,
          }}
          style={styles.productImage}
        />
      </View>

      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.desc} numberOfLines={2} ellipsizeMode="tail">
        {item.description}
      </Text>
      <View style={styles.rating}>
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <FontAwesome key={i} name="star" size={16} color="gold" />
          ))}
      </View>

      <Text style={styles.price}>${item.current_price[0]?.USD[0]}</Text>

      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Add to cart </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productWrapper: {
    flex: 0.5,
    marginBottom: 24,
    marginRight: 12,
  },

  imgWrap: {
    backgroundColor: '#EDEDEDAB',
    height: 184,
    width: '100%',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  productImage: {
    height: `80%`,
    width: '100%',
    resizeMode: 'contain',
  },

  price: {
    fontSize: 13,
    fontWeight: '500',
    color: '#FF7F7D',
    fontFamily: 'Montserrat-Medium',
    marginTop: 13,
    marginBottom: 17,
  },

  title: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Montserrat-SemiBold',
    color: '#2A2A2A',
    marginTop: 16,
    marginBottom: 8,
  },

  desc: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Montserrat-Regular',
    color: '#2A2A2A',
    marginBottom: 8,
  },

  rating: {
    flexDirection: 'row',
    marginVertical: 8,
  },

  button: {
    alignSelf: 'flex-start',
    borderColor: '#FF7F7D',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 11,
    borderRadius: 12,
  },

  buttonText: {
    fontWeight: '500',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: '#2A2A2ACC',
  },
});

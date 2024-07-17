import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from 'expo-router';
import { useRoute } from '@react-navigation/native';

import { NavigationProps } from '@/utils/@types/context';

const CartTab = () => {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute();
  const routeName = route.name;

  return (
    <View style={styles.cartTabHeader}>
      <Pressable
        onPress={() => navigation.navigate('index')}
        style={styles.tabBtn}
      >
        <Text style={[styles.text, routeName === 'index' && styles.activeText]}>
          Orders
        </Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('past')}
        style={styles.tabBtn}
      >
        <Text style={[styles.text, routeName === 'past' && styles.activeText]}>
          Past Orders
        </Text>
      </Pressable>
    </View>
  );
};

export default CartTab;

const styles = StyleSheet.create({
  cartTabHeader: {
    height: 60,
    width: `100%`,
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 22,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 34,
    marginBottom: 20,
  },

  tabBtn: {},

  text: {
    color: '#FAFAFA',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Montserrat-Regular',
  },

  activeText: {
    color: '#FF7F7D',
    fontWeight: '600',
    fontFamily: 'Montserrat-SemiBold',
  },
});

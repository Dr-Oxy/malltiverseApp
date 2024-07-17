import { useMemo, useContext } from 'react';

import {
  ScrollView,
  Image,
  SafeAreaView,
  Pressable,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Header } from '@/components';

import { ProductLoader, TwoColumn, ProductCard, Section } from '@/components';

import { useGetProducts } from '@/hooks/useProducts';
import { Item, NavigationProps } from '@/utils/@types/context';

export default function HomeScreen() {
  const { data, isLoading, isError, refetch, error } = useGetProducts();

  const products = useMemo(() => {
    return data?.data?.items;
  }, [data?.data?.items]);

  const accessories = products?.filter(
    (item: Item) => item?.categories?.[0]?.name === 'accessories',
  );

  const dresses = products?.filter(
    (item: Item) => item?.categories?.[0]?.name === 'dresses',
  );

  const jeans = products?.filter(
    (item: Item) => item?.categories?.[0]?.name === 'jeans',
  );

  if (isError) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#232323' }}>
        <View style={styles.errorWrapper}>
          <View
            style={{
              flexDirection: 'row',
              gap: 8,
              alignItems: 'center',
              marginBottom: 16,
            }}
          >
            <Text style={{ color: 'red', fontSize: 20 }}>Error</Text>

            <Text style={styles.errorText}>{error?.message}</Text>
          </View>

          <Pressable style={styles.reloadButton} onPress={() => refetch()}>
            <Text> Reload</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <Header text="Product Listing" />

      {isLoading ? (
        <View style={{ flex: 1 }}>
          <TwoColumn>
            {Array(6)
              .fill('')
              .map((_, i) => (
                <ProductLoader key={i} />
              ))}
          </TwoColumn>
        </View>
      ) : (
        <ScrollView style={styles.productContainer}>
          <Image
            style={styles.hero}
            source={require('@/assets/images/homePic.png')}
          />

          <Section arr={accessories} title="Accessories" />

          <Section arr={dresses} title="Dresses" />

          <Section arr={jeans} title="Jeans" />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },

  errorWrapper: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
  },

  reloadButton: {
    backgroundColor: '#FF7F7D',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    fontFamily: 'Montserrat-Medium',
  },

  hero: {
    height: 232,
    width: `100%`,
    resizeMode: 'contain',
    marginBottom: 30,
  },

  productContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    marginBottom: 90,
  },

  carousel: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 8,
    backgroundColor: '#FAFAFA',
  },

  header: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'Montserrat-Medium',
  },

  leading: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 30,
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
  },

  cartButton: {
    height: 64,
    width: 64,
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#393535',
    position: 'relative',
  },

  dot: {
    height: 16,
    width: 16,
    borderRadius: 40,
    backgroundColor: 'orange',
    position: 'absolute',
    top: -6,
    right: 0,
  },

  sub: {
    marginTop: 10,
    fontSize: 20,
    color: 'white',
  },
});

import { useMemo, useContext } from 'react';

import {
  ScrollView,
  Image,
  SafeAreaView,
  Pressable,
  View,
  Text,
} from 'react-native';

import { styles } from '@/styles/home';

import { Header } from '@/components';

import { ProductLoader, TwoColumn, Section } from '@/components';

import { useGetProducts } from '@/hooks/useProducts';
import { Item } from '@/utils/@types/context';

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

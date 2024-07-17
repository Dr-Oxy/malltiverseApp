import React, { useRef, useState, useContext, useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Alert,
} from 'react-native';

import { Item } from '@/utils/@types/context';
import { AppContext } from '@/utils/appContext';
import ProductCard from './ProductCard';

const { width } = Dimensions.get('window');
const containerPadding = 24 * 2; // Padding on both sides
const availableWidth = width - containerPadding;

const slideSpacing = 20;
const cardWidth = (availableWidth - slideSpacing) / 2 + 6;
// const cardWidth = availableWidth * 0.5;

interface SectionProps {
  arr: any;
  title: string;
}

const Section = ({ arr, title }: SectionProps) => {
  const { onAdd, cart } = useContext(AppContext);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const addToCart = (product: Item) => {
    onAdd(product);

    Alert.alert(
      'Product Added!',
      `${product.name} has been successfully added to cart.`,
    );
  };

  const flatListRef = useRef<FlatList<Item>>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    // const index = Math.round(
    //   event.nativeEvent.contentOffset.x / availableWidth,
    // );

    const index = Math.round(event.nativeEvent.contentOffset.x);

    setCurrentIndex(index);
  };

  const renderProduct = (item: Item) => (
    <View style={styles.card} key={item.id}>
      <ProductCard onPress={() => addToCart(item)} key={item.id} item={item} />
    </View>
  );

  const renderItem = ({ item, index }: { item: Item; index: number }) => {
    const nextItem = arr[index * 2 + 1];
    return (
      <View style={styles.page}>
        {renderProduct(item)}
        {nextItem && renderProduct(nextItem)}
      </View>
    );
  };

  const groupedProducts = useMemo(() => {
    if (!arr) return [];
    return arr.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / 2);
      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }
      if (resultArray[chunkIndex].length < 2) {
        resultArray[chunkIndex].push(item);
      } else {
        resultArray.push([item]); // Start a new group if the current one is full
      }
      return resultArray;
    }, [] as Item[][]);
  }, [arr]);

  const flattenedProducts = groupedProducts.flat();

  console.log({ groupedProducts, flattenedProducts });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      <FlatList
        data={flattenedProducts || []}
        // data={arr?.filter((_: any, index: number) => index % 2 === 0)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        ref={flatListRef}
        scrollEventThrottle={24}
        // contentContainerStyle={styles.list}
        snapToInterval={availableWidth}
        decelerationRate="fast"
      />

      <View style={styles.indicatorContainer}>
        {arr
          .filter((_: any, index: number) => index % 2 === 0)
          .map((_: any, index: React.Key | null | undefined) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentIndex === index && styles.activeIndicator,
              ]}
            />
          ))}
      </View>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    marginBottom: 60,
  },

  header: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    color: '#2A2A2A',
  },

  page: {
    width: availableWidth,
    flexDirection: 'row',
    // backgroundColor: 'blue',
    paddingHorizontal: slideSpacing / 2,
  },

  card: {
    width: cardWidth,
    backgroundColor: 'red',
    paddingHorizontal: slideSpacing / 4,
  },

  // card: {
  //   width: cardWidth,
  //   backgroundColor: '#f9f9f9',
  //   borderRadius: 8,
  //   paddingVertical: 16,
  //   alignItems: 'center',
  //   margin: 8,
  // },

  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  indicator: {
    width: 12,
    height: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    margin: 4,
  },
  activeIndicator: {
    backgroundColor: 'red',
    borderWidth: 0,
  },
});

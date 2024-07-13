import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { TabIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 23,
          left: 24,
          right: 24,
          backgroundColor: Colors[colorScheme ?? 'light'].tabBackground,
          borderRadius: 20,
          height: 67,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                { backgroundColor: focused ? '#FF7F7D' : '#2A2A2A' },
                styles.iconWrap,
              ]}
            >
              <TabIcon
                source={
                  focused
                    ? require('@/assets/images/home-2.png')
                    : require('@/assets/images/home.png')
                }
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                { backgroundColor: focused ? '#FF7F7D' : '#2A2A2A' },
                styles.iconWrap,
              ]}
            >
              <TabIcon
                source={
                  focused
                    ? require('@/assets/images/cart2.png')
                    : require('@/assets/images/cart2.png')
                }
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                { backgroundColor: focused ? '#FF7F7D' : '#2A2A2A' },
                styles.iconWrap,
              ]}
            >
              <TabIcon
                source={
                  focused
                    ? require('@/assets/images/cart-focused.png')
                    : require('@/assets/images/cart.png')
                }
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconWrap: {
    height: 34,
    width: 34,
    borderRadius: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

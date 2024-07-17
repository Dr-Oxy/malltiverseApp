import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { TabIcon, TabBarIcon } from '@/components/navigation/TabBarIcon';
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
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                { backgroundColor: focused ? '#FF7F7D' : '#2A2A2A' },
                styles.iconWrap,
              ]}
            >
              <TabBarIcon name="home" color={color} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="(cart)"
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused, color }) => (
            <View
              style={[
                { backgroundColor: focused ? '#FF7F7D' : '#2A2A2A' },
                styles.iconWrap,
              ]}
            >
              <TabBarIcon name="cart" color={color} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="support"
        options={{
          title: 'Support',
          tabBarIcon: ({ focused, color }) => (
            <View
              style={[
                { backgroundColor: focused ? '#FF7F7D' : '#2A2A2A' },
                styles.iconWrap,
              ]}
            >
              <TabBarIcon name="chatbubbles" color={color} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused, color }) => (
            <View
              style={[
                { backgroundColor: focused ? '#FF7F7D' : '#2A2A2A' },
                styles.iconWrap,
              ]}
            >
              <TabBarIcon name="person" color={color} />
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

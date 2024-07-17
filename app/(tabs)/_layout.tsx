import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const tabList = [
    {
      id: 1,
      name: 'index',
      title: 'Home',
      tabIcon: 'home',
    },
    {
      id: 2,
      name: '(cart)',
      title: 'Cart',
      tabIcon: 'cart',
    },
    {
      id: 3,
      name: 'support',
      title: 'Support',
      tabIcon: 'chatbubbles',
    },
    {
      id: 4,
      name: 'profile',
      title: 'Profile',
      tabIcon: 'person',
    },
  ];

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
      {tabList?.map((item) => (
        <Tabs.Screen
          key={item.id}
          name={item.name}
          options={{
            title: `${item.title}`,
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View
                style={[
                  {
                    backgroundColor: focused
                      ? Colors[colorScheme ?? 'light'].primaryColor
                      : Colors[colorScheme ?? 'light'].tabBackground,
                  },
                  styles.iconWrap,
                ]}
              >
                <TabBarIcon name={item.tabIcon} color={color} />
              </View>
            ),
          }}
        />
      ))}
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

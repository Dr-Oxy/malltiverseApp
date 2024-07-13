import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

interface TextProps {
  text: string;
}

const Header = ({ text }: TextProps) => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require('@/assets/images/malltiverseLogo.png')}
      />
      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 100,
    width: `100%`,
    backgroundColor: '#FAFAFA',
    paddingTop: 40,
    paddingHorizontal: 22,

    flexDirection: 'row',
    alignItems: 'center',
    gap: 34,
  },

  logo: {
    height: 31,
    width: 99,
    resizeMode: 'contain',
  },

  headerText: {
    color: '##2A2A2A',
    fontSize: 19,
    fontWeight: '600',
    fontFamily: 'Montserrat-SemiBold',
  },
});

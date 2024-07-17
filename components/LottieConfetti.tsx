import { StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';

import LottieView from 'lottie-react-native';

const LottieConfetti = ({ ref }: any) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.paymentLead}>Payment Successful</Text>
      </View>

      <LottieView
        ref={ref}
        source={require('@/assets/images/confetti.json')}
        autoPlay={false}
        loop={false}
        style={styles.lottie}
        resizeMode="cover"
      />
    </>
  );
};

export default LottieConfetti;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '',
  },

  paymentLead: {
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'Monsterrat-SemiBold',
    marginTop: 24,
  },

  lottie: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    pointerEvents: 'none',
  },
});

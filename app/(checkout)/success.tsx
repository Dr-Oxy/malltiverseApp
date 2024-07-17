import { useContext, useRef } from 'react';

import {
  Image,
  ScrollView,
  SafeAreaView,
  Pressable,
  View,
  Text,
} from 'react-native';

import { Header } from '@/components';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

import { AppContext } from '@/utils/appContext';
import { styles } from '@/styles/cart';

import LottieView from 'lottie-react-native';

const Success = () => {
  const confettiRef = useRef<LottieView>(null);

  function triggerConfetti() {
    confettiRef.current?.play(0);

    console.log('hello');
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <Header />

      <ScrollView style={styles.checkout}>
        <View>
          <View style={styles.container}>
            <Text style={styles.paymentLead}>Payment Successful</Text>
          </View>

          <Pressable onPress={triggerConfetti} style={styles.totalButton}>
            <Text style={styles.buttonText}>Make Payment </Text>
          </Pressable>

          {/* <LottieView
                ref={confettiRef}
                source={require('@/assets/images/confetti.json')}
                autoPlay={false}
                loop={false}
                // style={styles.lottie}
                resizeMode="cover"
              /> */}

          <LottieView
            source={require('@/assets/images/confetti.json')}
            autoPlay
            loop
            speed={0.8}
            colorFilters={[
              {
                keypath: 'Loading',
                color: 'red',
              },
            ]}
            onAnimationFinish={() => console.log('Animation finished!')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Success;

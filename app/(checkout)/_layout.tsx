import { Stack } from 'expo-router';

export default function CheckoutLayout() {
  return (
    <Stack>
      <Stack.Screen name="payment" options={{ headerShown: false }} />
      <Stack.Screen name="success" options={{ headerShown: false }} />
    </Stack>
  );
}

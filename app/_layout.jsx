import { Text, View } from 'react-native'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
      "SpaceMono-Regular": require("../assets/fonts/SpaceMono-Regular.ttf"),
        // "Poppins-Black": require('../assets/fonts/Poppins-Black.ttf'),
        // "Poppins-Thin": require('../assets/fonts/Poppins-Thin.ttf'),
        // "Poppins-Light": require('../assets/fonts/Poppins-Light.ttf'),
        // "Poppins-Regular": require('../assets/fonts/Poppins-Regular.ttf'),
        // "Poppins-Medium": require('../assets/fonts/Poppins-Medium.ttf'),
        // "Poppins-SemiBold": require('../assets/fonts/Poppins-SemiBold.ttf'),
        // "Poppins-ExtraBold": require('../assets/fonts/Poppins-ExtraBold.ttf'),
        // "Roboto-Black": require('../assets/fonts/Roboto-Black.ttf'),
        // "Roboto-Bold": require('../assets/fonts/Roboto-Bold.ttf'),
        // "Roboto-Light": require('../assets/fonts/Roboto-Light.ttf'),
        // "Roboto-Medium": require('../assets/fonts/Roboto-Medium.ttf'),
        // "Roboto-Regular": require('../assets/fonts/Roboto-Regular.ttf'),
        // "Roboto-Thin": require('../assets/fonts/Roboto-Thin.ttf'),
    });

    useEffect(() => {
        if(error) throw error;
        if(fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error])

    if(!fontsLoaded && !error) return null;

  return (
    <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='create-virtual-account' options={{ title: 'Virtual Account' }} />

    </Stack>
  )
}

export default RootLayout
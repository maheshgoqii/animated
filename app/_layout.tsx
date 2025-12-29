import colors from '@/constants/colors';
import { useColorScheme } from '@/hooks/use-color-scheme';
import StoreProvider from '@/provider/StoreProvider';
import { RobotoMono_100Thin } from '@expo-google-fonts/roboto-mono/100Thin';
import { RobotoMono_200ExtraLight } from '@expo-google-fonts/roboto-mono/200ExtraLight';
import { RobotoMono_300Light } from '@expo-google-fonts/roboto-mono/300Light';
import { RobotoMono_400Regular } from '@expo-google-fonts/roboto-mono/400Regular';
import { RobotoMono_500Medium } from '@expo-google-fonts/roboto-mono/500Medium';
import { RobotoMono_600SemiBold } from '@expo-google-fonts/roboto-mono/600SemiBold';
import { RobotoMono_700Bold } from '@expo-google-fonts/roboto-mono/700Bold';
import { useFonts } from '@expo-google-fonts/roboto-mono/useFonts';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: 'index',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  let [fontsLoaded] = useFonts({
    RobotoMono_100Thin,
    RobotoMono_200ExtraLight,
    RobotoMono_300Light,
    RobotoMono_400Regular,
    RobotoMono_500Medium,
    RobotoMono_600SemiBold,
    RobotoMono_700Bold,
    // RobotoMono_100Thin_Italic,
    // RobotoMono_200ExtraLight_Italic,
    // RobotoMono_300Light_Italic,
    // RobotoMono_400Regular_Italic,
    // RobotoMono_500Medium_Italic,
    // RobotoMono_600SemiBold_Italic,
    // RobotoMono_700Bold_Italic
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hide();
    }
  }, [fontsLoaded]);


  if (!fontsLoaded) {
    return null;
  }

  return (
    <StoreProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" backgroundColor={colors.primary} />
      </ThemeProvider>
    </StoreProvider>
  );
}

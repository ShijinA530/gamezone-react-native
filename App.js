import Home from "./screens/home";
import ReviewDetails from './screens/reviewDetails';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator()




SplashScreen.preventAutoHideAsync();

export default function App() {
  const  [loaded, error] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  })
 
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={ReviewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



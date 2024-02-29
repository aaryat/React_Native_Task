import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

//Navigation
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

//screens
import AppPro from './screens/AppPro';
import MovieScreen from './screens/MovieScreen';

export type RootStackParamList = {
  AppPro: undefined;
  MovieScreen: {email: string, productId: string}
};

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator 
       screenOptions={{
        headerShown: false
      }}
      initialRouteName='AppPro'>
        <Stack.Screen
          name='AppPro'
          component={AppPro}
        />
        <Stack.Screen
          name='MovieScreen'
          component={MovieScreen}
 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

//code with splashscreen
// import React, { useEffect, useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SplashScreen from './SplashScreen'; // Import your SplashScreen component
// import AppPro from './screens/AppPro';
// import MovieScreen from './screens/MovieScreen';

// export type RootStackParamList = {
//   AppPro: undefined;
//   MovieScreen: { email: string; productId: string };
// };

// const Stack = createNativeStackNavigator<RootStackParamList>();

// function App(): JSX.Element {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate a delay for the splash screen
//     const timeout = setTimeout(() => {
//       setIsLoading(false);
//     }, 3000); // Adjust the duration as needed (in milliseconds)

//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <>
//       {isLoading ? ( // Conditionally render SplashScreen if isLoading is true
//         <SplashScreen />
//       ) : (
//         <NavigationContainer>
//           <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='AppPro'>
//             <Stack.Screen name='AppPro' component={AppPro} />
//             <Stack.Screen name='MovieScreen' component={MovieScreen} />
//           </Stack.Navigator>
//         </NavigationContainer>
//       )}
//     </>
//   );
// }
// export default App;

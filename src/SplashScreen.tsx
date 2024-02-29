// import React, { useEffect } from 'react';
// import { View, Image, StyleSheet, Dimensions } from 'react-native';
// import { NativeStackScreenProps } from "@react-navigation/native-stack"
// import { RootStackParamList } from './App'
// type SplashProps = NativeStackScreenProps<RootStackParamList, 'SplashScreen'>

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// const SplashScreen = ({ navigation }:SplashProps) => {
//   useEffect(() => {
//     // Simulate a delay for the splash screen
//     const timeout = setTimeout(() => {
//       // Navigate to the next screen after the splash screen
//       navigation.replace('MovieScreen', {});
//     }, 4000); // Adjust the duration as needed (in milliseconds)

//     return () => clearTimeout(timeout);
//   }, [navigation]);

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('./splashlogo.json')} // Add your splash screen image here
//         style={styles.logo}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logo: {
//     width: windowWidth * 0.5,
//     height: windowWidth * 0.5,
//     resizeMode: 'contain',
//   },
// });

// export default SplashScreen;

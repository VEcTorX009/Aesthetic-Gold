import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Loader  from './components/Load/Loader';
import {LoaderProvider}  from './components/Load/LoaderContext';
import 'react-native-tailwindcss';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { ToastProvider } from 'react-native-toast-notifications'
import { faCheck, faCross,  faWarning } from '@fortawesome/free-solid-svg-icons';
import { useFonts } from '@expo-google-fonts/akshar';


export default function App() {
  const [loggedIn, setLoggedIn] = useState(true);


  let [fontsLoaded] = useFonts({
      Alata_400Regular: require('@expo-google-fonts/alata/Alata_400Regular.ttf'),
      Akshar_400Regular: require('@expo-google-fonts/akshar/Akshar_400Regular.ttf'),
    });
    if (!fontsLoaded) {
      return null;
    }
  return (
    
    <View style={styles.container}>
    <ToastProvider placement="top"
    duration={5000}
    animationType='slide-in'
    animationDuration={250}
    successColor="green"
    dangerColor="red"
    warningColor="orange"
    normalColor="gray"
    successIcon={<FontAwesomeIcon icon={ faCheck } />}
    dangerIcon={<FontAwesomeIcon icon={ faWarning } />}
    warningIcon={<FontAwesomeIcon icon={ faCross } />}
    textStyle={{ fontSize: 16 }}
    offset={50} 
    offsetTop={30}
    offsetBottom={40}
    swipeEnabled={true}>

      <LoaderProvider>
      {loggedIn===true ? <HomeScreen logged={setLoggedIn}/> : <LoginScreen logged={setLoggedIn} />}
      <Loader/>
      </LoaderProvider>
      </ToastProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

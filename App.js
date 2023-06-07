import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Loader  from './components/Load/Loader';
import {LoaderProvider}  from './components/Load/LoaderContext';
import 'react-native-tailwindcss';
import Container from 'toastify-react-native';


export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    
    <View style={styles.container}>
    <Container position="top">

      <LoaderProvider>
      {loggedIn===true ? <HomeScreen logged={setLoggedIn}/> : <LoginScreen logged={setLoggedIn} />}
      <Loader/>
      </LoaderProvider>
    </Container>
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

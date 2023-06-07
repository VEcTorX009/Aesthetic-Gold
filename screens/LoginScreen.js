import React, { useState } from 'react';
import { View, TextInput, Alert, Text, Image, StyleSheet, ImageBackground, Pressable } from 'react-native';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { LoaderContext } from '../components/Load/LoaderContext';
import { useContext } from 'react';
import { useFonts } from '@expo-google-fonts/akshar';
import {Toast} from 'toastify-react-native';

const LoginScreen = ({ logged }) => {
  const { setIsLoading } = useContext(LoaderContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          logged(true);
          Toast.success(`You've Logged In As ${user.email}`)
        })
        .catch((error) => {
          Alert.alert('Error', error.message);
          Toast.error("Please Try Again")

        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 3000);
  };
let [fontsLoaded] = useFonts({
  Alata_400Regular: require('@expo-google-fonts/alata/Alata_400Regular.ttf'),
  Akshar_400Regular: require('@expo-google-fonts/akshar/Akshar_400Regular.ttf'),
});

if (!fontsLoaded) {
  // Return a loading indicator or null while the fonts are loading
  return null;
}

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.background}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <Text style={styles.title}>WELCOME</Text>
<View>


          <Text style={styles.label}>Enter Your ID:</Text>
          <TextInput style={styles.input} onChangeText={(text)=> setEmail(text)} placeholder="ID" placeholderTextColor="gray" />

          <Text style={styles.label}>Enter Your Password:</Text>
          <TextInput style={styles.input} placeholder="Password" onChangeText={(text)=> setPassword(text)}  secureTextEntry placeholderTextColor="gray" />
          <Text style={styles.prompt}>Have trouble logging in?</Text>
</View>
          <Pressable style={styles.button} onPress={handleLogin}><Text style={styles.buttontext}>LOGIN</Text></Pressable>

          <Text style={styles.aestheticText}>AESTHETIC GOLD | 2023</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  button: {
    marginTop: 20,
    width: 150,
    height: 50,
    color: 'white',
    backgroundColor: '#363932',
    alignItems:"center",
    justifyContent:"center",
    borderRadius: 30,
  },
  buttontext:{
    color:"white",
    fontSize:15,
  },
  background: {
    flex: 1,
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  prompt: {
    marginTop: -5,
    fontWeight: '900',
    color: '#0d69fc',
    fontSize: 11,
    textDecorationLine: 'underline',
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: 'Akshar_400Regular',
    color: 'white',
    fontSize: 35,
    marginBottom: 10,
  },
  label: {
    marginTop: 16,
    fontWeight: '400',
    textAlign: 'left',
    fontFamily: 'Alata_400Regular',
    color: '#ffffff',
    fontSize: 14,
    marginBottom: 16,
  },
  input: {
    width: 250,
    height: 40,
    backgroundColor: '#363932',
    color: 'white',
    shadowOpacity: 1,
    shadowColor: 'black',
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  aestheticText: {
    marginTop: 50,
    letterSpacing: 5,
    color: '#888888',
    fontSize: 10,
    lineHeight: 28,
    textAlign: 'center',
  },
});

export default LoginScreen;

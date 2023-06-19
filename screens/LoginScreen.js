import React, { useState } from 'react';
import { View, TextInput, Linking, Text, Image, ImageBackground, Pressable } from 'react-native';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { LoaderContext } from '../components/Load/LoaderContext';
import { useContext } from 'react';
import { useToast } from "react-native-toast-notifications";
import style from '../styles/global';
const LoginScreen = ({ logged }) => {
  const { setIsLoading } = useContext(LoaderContext);
  const [email, setEmail] = useState('');
    const toast = useToast();

  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          logged(true);
          toast.show(`Logged In As ${user.email}`, {
            type: "success",
          });
          
        })
        .catch((error) => {
          toast.show(`${error.message.replaceAll("Firebase:","")}`,{type:"danger"});
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 3000);
  };


  return (
    <View style={style.container}>
      <ImageBackground
        source={require('../assets/background.png')}
        style={style.backgroundImage}
      >
        <View style={style.background}>
          <Image source={require('../assets/logo.png')} style={style.logo} />
          <Text style={style.title}>WELCOME</Text>
<View>


          <Text style={style.label}>Enter Your ID:</Text>
          <TextInput style={style.input} onChangeText={(text)=> setEmail(text)} placeholder="ID" placeholderTextColor="gray" />

          <Text style={style.label}>Enter Your Password:</Text>
          <TextInput style={style.input} placeholder="Password" onChangeText={(text)=> setPassword(text)}  secureTextEntry placeholderTextColor="gray" />
          {email!=="" && password===""? <Text style={style.caution}>Invalid Password</Text> : ""}
          

          <Text style={style.prompt} onPress={() => Linking.openURL('mailto:tanayupreti@gmail.com')}>Have trouble logging in?</Text>
</View>
          <Pressable style={style.button} onPress={handleLogin}><Text style={style.buttontext}>LOGIN</Text></Pressable>

          <Text style={style.aestheticText}>AESTHETIC GOLD | 2023</Text>
        </View>
      </ImageBackground>
    </View>
  );
};


export default LoginScreen;

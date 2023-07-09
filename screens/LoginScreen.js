import React, { useState } from "react";
import {
  View,
  TextInput,
  Linking,
  Text,
  Image,
  ImageBackground,
  Pressable,
  Alert,
} from "react-native";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { LoaderContext } from "../components/Load/LoaderContext";
import { useContext } from "react";
import { useToast } from "react-native-toast-notifications";
import style from "../styles/global";
import FadeInView from "../components/FadeInView";
const LoginScreen = ({
  userphoto,
  logged,
  username,
  useremail,
  userid,
  userdate,
  usertransactions
}) => {
  const { setIsLoading } = useContext(LoaderContext);
  const [email, setEmail] = useState("");
  const toast = useToast();
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          logged(true);
          const parts = user.email.split("@");
          const name = parts[0].replace(".", " ");
          const final = name.charAt(0).toUpperCase() + name.slice(1)
          if (user.displayName) {
            username(user.displayName)
          } else {
            username(final)
          }

          // implemenet logic to extract number of transactions done by the manager to this  usertransactions(number of transactions done by them)
          usertransactions(339)
            userphoto(user.photoURL);
          
          userdate(user.metadata.creationTime);
          useremail(user.email);
          userid(user.uid);
          toast.show(`Logged In As ${final}`, {
            type: "success",
          });
        })
        .catch((error) => {
          toast.show(`${error.message.replaceAll("Firebase:", "")}`, {
            type: "danger",
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 3000);
  };
  const contactdeveloper = () => {
    const body = `Hi I am ${managername}, I was struggling with Aesthetic Gold App`;
    const encodedBody = encodeURIComponent(body);
    Linking.openURL(`mailto:tanayupreti@gmail.com?subject=Hello+I+need+help+with+Aesthetic+Gold+App&body=${encodedBody}`);
  };
  
  const contactsupport = () => {
    const body = `Hi I am ${managername}, I need help with Aesthetic Gold`;
    const encodedBody = encodeURIComponent(body);
    Linking.openURL(`mailto:tanayupreti@gmail.com?subject=Hello+Support&body=${encodedBody}`);
  };
  
  const showinfo = () => {
    Alert.alert(
      'Aesthetic Gold ©️ 2023',
      'All Trademarks are Registered',
      [
        {
          text: 'Contact Developer Team',
          style: 'cancel',
          onPress: () => contactdeveloper(),
        },
        {
          text: 'Contact Support',
          onPress: () => contactsupport(),
        },
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ],
      { cancelable: true }
    );
  };
  return (
    <View style={style.container}>
    <FadeInView>

      <ImageBackground
        source={require("../assets/background.png")}
        style={style.backgroundImage}
      >
        <View style={style.zindex}>
          <Image source={require("../assets/logo.png")} style={style.logo} />
          <Text style={style.title}>WELCOME</Text>
          <View>
            <Text style={style.label}>Enter Your ID:</Text>
            <TextInput
              style={style.input}
              onChangeText={(text) => setEmail(text)}
              placeholder="ID"
              placeholderTextColor="gray"
            />

            <Text style={style.label}>Enter Your Password:</Text>
            <TextInput
              style={style.input}
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
              placeholderTextColor="gray"
            />
            {email !== "" && password === "" ? (
              <Text style={style.caution}>Invalid Password</Text>
            ) : (
              ""
            )}

            <Text
              style={style.prompt}
              onPress={showinfo}
            >
              Have trouble logging in?
            </Text>
          </View>
          <Pressable style={style.button} onPress={handleLogin}>
            <Text style={style.buttontext}>LOGIN</Text>
          </Pressable>

          <Text style={style.aestheticText}>AESTHETIC GOLD | 2023</Text>
        </View>
      </ImageBackground>
    </FadeInView>

    </View>
  );
};

export default LoginScreen;

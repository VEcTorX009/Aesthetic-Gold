import React, { useState } from 'react';
import { View, TextInput, Linking, Text, Image, styleheet, ImageBackground, Pressable } from 'react-native';
import { auth } from '../firebaseConfig';
import { LoaderContext } from '../components/Load/LoaderContext';
import { useContext } from 'react';
import { useToast } from "react-native-toast-notifications";
import style from '../styles/global';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Hero from '../components/Home/Hero';
import Navbar from '../components/Layout/Navbar';
import Drawer from 'react-native-drawer';

const HomeScreen = ({ logged }) => {
  const { setIsLoading } = useContext(LoaderContext);
  const toast = useToast();
  const handleSignOut = () => {
    setIsLoading(true);
    setTimeout(() => {
      signOut(auth)
        .then(() => {
          logged(false);
          toast.show(`Have a Great Day!`, {
            type: "info",
          });
        })
        .catch((error) => {
          toast.show(`${error.message.replaceAll("Firebase:","")}`, { type: "danger" });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 3000);
  };

  return (
    <View style={style.container}>
    <Drawer
      content={<Navbar />}
      open={false} // Set this to true to initially open the sidebar
      tapToClose={true}
      openDrawerOffset={0.3}
      panCloseMask={0.3}
      negotiatePan={true}
    >
      <ImageBackground
        source={require('../assets/background.png')}
        style={style.backgroundImage}
      >
      <Navbar/>
        <Hero/>
      </ImageBackground>
      </Drawer>
    </View>
  );
};
export default HomeScreen;
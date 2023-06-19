import React, { useState } from 'react';
import { View, TextInput, Linking, Text, Image, styleheet, ImageBackground, Pressable, TouchableOpacity } from 'react-native';
import style from '../../styles/global';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)
  const showsidebar = () => {
    setSidebar(true)
  }
  return (
    <View style={style.sidebarbackground}>
      <TouchableOpacity onPress={showsidebar}>
        <FontAwesomeIcon icon={faBars} size={32} color="white" style={style.burgermenu} />
      </TouchableOpacity>
    </View>
  );
};
export default Navbar;
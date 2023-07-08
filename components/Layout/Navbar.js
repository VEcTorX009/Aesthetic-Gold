import React, { useState } from "react";
import {
  View,
  TextInput,
  Linking,
  Text,
  Image,
  styleheet,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  Animated,
  PanResponder,
  Alert,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBars,
  faBell,
  faCircleQuestion,
  faClose,
  faEnvelope,
  faHome,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import style from "../../styles/global";
const Navbar = ({ prof, notif, managername, isnotif }) => {
  const [sidebar, setSidebar] = useState(false);
  const slideAnim = React.useRef(new Animated.Value(-300)).current;
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
  const showSidebar = () => {
    setSidebar(true);
  };

  const hideSidebar = () => {
    setSidebar(false);
  };
  const gotohome = () => {
    notif(false);
    prof(false);
  };

  React.useEffect(() => {
    if (sidebar) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [sidebar, slideAnim]);
  React.useEffect(() => {
    if (!sidebar) {
      Animated.timing(slideAnim, {
        toValue: -300,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [sidebar, slideAnim]);

  return (
    <>
      <View style={style.sidebarbackground}>
        <View style={style.navtop}>
          {sidebar === false ? (
            <TouchableOpacity onPress={showSidebar}>
              <FontAwesomeIcon
                icon={faBars}
                size={32}
                color="white"
                style={style.burgermenu}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={hideSidebar}>
              <FontAwesomeIcon
                icon={faXmark}
                size={36}
                color="white"
                style={style.cross}
              />
            </TouchableOpacity>
          )}
          <Text style={style.heading}>{managername}</Text>
          {isnotif ? (
            <TouchableOpacity onPress={() => notif(false)}>
              <FontAwesomeIcon
                icon={faXmark}
                size={36}
                color="white"
                style={style.notificationcross}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => notif(true)}>
              <FontAwesomeIcon
                icon={faBell}
                size={30}
                color="white"
                style={style.notification}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {sidebar && (
        <Animated.View
          style={[
            style.sidebarbody,
            { transform: [{ translateX: slideAnim }] },
          ]}
        >
          <View style={style.sidebarbody}>
            <View style={style.sidebarcontainer}>
              <TouchableOpacity onPress={gotohome}>
                <FontAwesomeIcon
                  icon={faHome}
                  size={30}
                  color="white"
                  style={style.navicons}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => prof(true)}>
                <FontAwesomeIcon
                  icon={faUser}
                  size={30}
                  color="white"
                  style={style.navicons}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={showSidebar}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size={30}
                  color="white"
                  style={style.navicons}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={showSidebar}>
                <FontAwesomeIcon
                  icon={faCircleQuestion}
                  size={30}
                  color="white"
                  style={style.navicons}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={style.navbottom} onPress={showinfo}>
              <Image
                source={require("../../assets/logo.png")}
                style={{ left: -10, width: 50, height: 50 }}
              />
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}
    </>
  );
};

export default Navbar;

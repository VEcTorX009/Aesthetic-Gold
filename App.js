import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import Loader from "./components/Load/Loader";
import { LoaderProvider } from "./components/Load/LoaderContext";
import "react-native-tailwindcss";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ToastProvider } from "react-native-toast-notifications";
import { faCheck, faCross, faWarning } from "@fortawesome/free-solid-svg-icons";
import { useFonts } from "@expo-google-fonts/akshar";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userphoto, setUserphoto] = useState("");
  const [userid, setUserid] = useState("");
  const [userdate, setUserdate] = useState("");
  const [usertransactions, setUsertransactions] = useState(0);
  let [fontsLoaded] = useFonts({
    Alata_400Regular: require("@expo-google-fonts/alata/Alata_400Regular.ttf"),
    Akshar_400Regular: require("@expo-google-fonts/akshar/Akshar_400Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ToastProvider
        placement="top"
        duration={5000}
        animationType="slide-in"
        animationDuration={250}
        successColor="green"
        dangerColor="red"
        warningColor="orange"
        normalColor="gray"
        successIcon={<FontAwesomeIcon icon={faCheck} />}
        dangerIcon={<FontAwesomeIcon icon={faWarning} />}
        warningIcon={<FontAwesomeIcon icon={faCross} />}
        textStyle={{ fontSize: 16 }}
        offset={50}
        offsetTop={30}
        offsetBottom={40}
        swipeEnabled={true}
      >
        <LoaderProvider>
          {loggedIn === true ? (
            <HomeScreen
              logged={setLoggedIn}
              username={setUsername}
              userdate={setUserdate}
              userid={setUserid}
              useremail={setUseremail}
              userphoto={setUserphoto}
              showphoto={userphoto}
              showemail={useremail}
              usertransactions={setUsertransactions}
              showusertransaction={usertransactions}
              showid={userid}
              showname={username}
              showuserdate={userdate}
            />
          ) : (
            <LoginScreen
              username={setUsername}
              userphoto={setUserphoto}
              useremail={setUseremail}
              usertransactions={setUsertransactions}
              userid={setUserid}
              userdate={setUserdate}
              logged={setLoggedIn}
            />
          )}
          <Loader />
        </LoaderProvider>
      </ToastProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});

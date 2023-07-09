import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Linking,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import { auth } from "../firebaseConfig";
import { LoaderContext } from "../components/Load/LoaderContext";
import { useContext } from "react";
import { useToast } from "react-native-toast-notifications";
import style from "../styles/global";
import Hero from "../components/Home/Hero";
import Profile from "../components/Profile/Profile";
import Navbar from "../components/Layout/Navbar";
import Notification from "../components/Home/Notification";
import AddTransaction from "../components/Transaction/AddTransaction";

const HomeScreen = ({
  showemail,
  showid,
  showuserdate,
  logged,
  username,
  useremail,
  userid,
  showname,
  userdate,
  userphoto,
  showphoto,
  usertransactions,
  showusertransaction
}) => {
  const { setIsLoading } = useContext(LoaderContext);
  const toast = useToast();
  const [showprofile, setShowprofile] = useState(false);
  const [managerdetails, setManagerdetails] = useState([{}]);
  useEffect(() => {
    setManagerdetails({
      managername: showname,
      manageremail: showemail,
      managerid: showid,
      managerdate: showuserdate,
      managerphoto: showphoto,
      managertransactions: showusertransaction,
    });
  }, [showname,showemail,showid,showuserdate,showphoto,showusertransaction]);
  const [shownotification, setShownotification] = useState(false);
  const [showtransaction, setShowtransaction] = useState(false)
  const [showinfo, setShowinfo] = useState(false)
  const handleSignOut = () => {
    setIsLoading(true);
    setTimeout(() => {
      signOut(auth)
        .then(() => {
          logged(false);
          username("");
          userphoto("");
          useremail("");
          userdate("");
          usertransactions(0)
          userid("");
          toast.show(`Have a Great Day!`, {
            type: "info",
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

  return (
    <View style={style.container}>
      <Navbar
        prof={setShowprofile}
        isnotif={shownotification}
        managername={showname}
        isadd={showtransaction}
        add={setShowtransaction}
        info = {showinfo}
        Showinfo = {setShowinfo}
        notif={setShownotification}
      />
      {shownotification && <Notification />}
      {showprofile && <Profile manager={managerdetails} />}
      {showtransaction && <AddTransaction showtransaction={setShowtransaction}/>}
      <Hero Showinfo = {setShowinfo} showtransaction={setShowtransaction} />
    </View>
  );
};
export default HomeScreen;

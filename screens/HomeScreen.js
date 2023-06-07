import { View, TextInput, Button, Alert, Text, Pressable } from "react-native";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { LoaderContext } from "../components/Load/LoaderContext";
import { useContext } from "react";
import {Toast} from 'toastify-react-native';

const HomeScreen = ({ logged }) => {
  const { setIsLoading } = useContext(LoaderContext);

  const handleSignOut = () => {
    setIsLoading(true);
    setTimeout(() => {
      signOut(auth)
        .then(() => {
          logged(false);
          Toast.success(`Have a Great Day!`)
          
        })
        .catch((error) => {
          console.log("Sign out error:", error);
          Toast.error("Please Try Again")

        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 3000);
  };

  // Render the user's details
  return (
    <View>
      <>
        <Text>Name: {}</Text>
        <Text>Phone: {}</Text>
        <Pressable onPress={handleSignOut}>
          <Text>Sign Out</Text>
        </Pressable>
      </>
    </View>
  );
};

export default HomeScreen;

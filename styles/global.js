import { StyleSheet } from "react-native";

 const style = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
    caution:{
      marginTop: -7,
      fontWeight: '900',
      textAlign: 'left',
      fontFamily: 'Alata_400Regular',
      color: 'red',
      fontSize: 12,
      marginBottom: 10,
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
    sidebarbackground:{
      position:"absolute",
      marginLeft:25,
      marginTop:25,
    },
  });
  
  export default style;
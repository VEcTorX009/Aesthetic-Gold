import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const style = StyleSheet.create({
  notificationcontainer: {
    flex: 1,
    position: "absolute",
    top: 5,
    zIndex: 9999999999999,
    height: 650,
    width: 350,
  },
  duebuttontext: {
    color: "black",
  },
  smallbutton: {
    width: 90,
    height: 40,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  profiletextboxes: {
    width: width,
    padding: 4,
    backgroundColor: "black",
  },
  profiletexts: {
    textAlign: "center",
    marginBottom: 5,
    fontFamily: "Alata_400Regular",
    color: "white",
    fontSize: 20,
  },
  premiumtext: {
    color: "yellow",
    fontSize: 20,
  },
  profiletextcontainer: {
    flex: 1,
    alignItems: "center",
  },
  rejectbutton: {
    backgroundColor: "red",
  },
  successbutton: {
    backgroundColor: "green",
  },
  failbutton: {
    backgroundColor: "yellow",
  },
  rejectbuttontext: {
    color: "white",
  },
  failbuttontext: {
    color: "black",
  },
  profilecontainer: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },
  profilebody: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    height: height,
    width: width,
    position: "absolute",
  },
  profilepicture: {
    width: 200,
    height: 200,
  },
  profilepicturecontainer: {
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "white",
  },
  notificationboxes: {
    gap: 60,
    flex: 1,
    padding: 9,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
    width: 340,
    height: 70,
    marginTop: 20,
    backgroundColor: "#5A6900",
    borderRadius: 99,
  },
  notficationbody: {
    position: "absolute",
    zIndex: 999,
    flex: 1,
    flexDirection: "column",
    top: 85,
    height: height,
    alignItems: "center",
    width: 400,
    backgroundColor: "rgba(173, 157, 5, 0.5)",
  },
  marginTop: {
    marginTop: 20,
  },
  status: {
    marginTop: 10,
  },
  heroboxes: {
    marginTop: 10,
    marginLeft: 10,
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
  },

  transactiontime: {
    fontFamily: "Alata_400Regular",
    marginTop: 10,
    color: "white",
    marginLeft: 10,
  },
  checkcircle: {
    color: "yellow",
  },
  managerid: {
    fontFamily: "Alata_400Regular",
    marginTop: 10,
    color: "white",
    marginLeft: 10,
  },
  amount: {
    fontFamily: "Alata_400Regular",
    marginTop: 10,
    color: "#5c4401",
    marginLeft: 10,
  },
  margintop0: {
    marginTop: 0,
  },
  customerid: {
    fontFamily: "Alata_400Regular",
    marginTop: 10,
    color: "white",
    marginLeft: 10,
  },

  boxcontainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    gap: 115,
    width: 340,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    height: 150,
  },
  boxtime: {
    fontFamily: "Alata_400Regular",
    fontSize: 20,
    color: "white",
  },
  caution: {
    marginTop: -7,
    fontWeight: "900",
    textAlign: "left",
    fontFamily: "Alata_400Regular",
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  profilebg: {
    top: 80,
    left: 20,
  },
  button: {
    marginTop: 20,
    width: 150,
    height: 50,
    color: "white",
    backgroundColor: "#363932",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  buttoncenter: {
    top: 0,
    left: 105,
  },
  buttontext: {
    color: "white",
    fontSize: 13,
    fontWeight: 500,
  },
  background: {
    flex: 1,
    top: 50,
    width: 400,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  fullbg: {
    width: width,
  },
  prompt: {
    marginTop: -5,
    fontWeight: "900",
    color: "#0d69fc",
    fontSize: 11,
    textDecorationLine: "underline",
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    marginTop: 10,
    fontWeight: "bold",
    fontFamily: "Akshar_400Regular",
    color: "white",
    fontSize: 35,
    marginBottom: 10,
  },
  scrollView: {
    top: 35,
    marginHorizontal: 0,
    height: height,
  },
  label: {
    marginTop: 16,
    fontWeight: "400",
    textAlign: "left",
    fontFamily: "Alata_400Regular",
    color: "#ffffff",
    fontSize: 14,
    marginBottom: 16,
  },
  input: {
    width: 250,
    height: 40,
    backgroundColor: "#363932",
    color: "white",
    shadowOpacity: 1,
    shadowColor: "black",
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  aestheticText: {
    marginTop: 50,
    letterSpacing: 5,
    color: "#888888",
    fontSize: 10,
    lineHeight: 28,
    textAlign: "center",
  },
  sidebarbackground: {
    zIndex: 999999,
    position: "absolute",
    marginLeft: 25,
    marginTop: 25,
  },
  burgermenu: {
    top: 10,
    left: 5,
    position: "absolute",
  },
  notificationcustomerid: {
    fontFamily: "Alata_400Regular",
    color: "white",
    marginLeft: 10,
  },
  notificationamount: {
    fontFamily: "Alata_400Regular",
    fontWeight: 600,
    color: "#5c4990",
    marginLeft: 10,
  },
  notification: {
    top: -10,
    right: 5,
    position: "absolute",
  },
  notificationcross: {
    top: -17,
    right: 5,
    position: "absolute",
  },
  cross: {
    top: 10,
    left: 5,
    position: "absolute",
  },
  sidebarbody: {
    position: "absolute",
    width: 70,
    left: 0,
    top: 30,
    backgroundColor: "#5c4401",
    height: height,
    zIndex: 9999,
  },
  sidebarcontainer: {
    left: 30,
  },
  navtop: {
    top: 5,
    height: 55,
    width: width,
    left: -5,
    backgroundColor: "black",
  },
  bigheading: {
    fontSize: 30,
    fontWeight: 900,
  },
  heading: {
    fontWeight: "bold",
    top: 15,
    zIndex: -999,
    fontSize: 20,
    right: 0,
    textAlign: "center",
    color: "#d0bc00",
  },
  navicons: {
    marginTop: 35,
  },
  navbottom: {
    position: "absolute",
    left: 30,
    bottom: 50,
  },
});

export default style;

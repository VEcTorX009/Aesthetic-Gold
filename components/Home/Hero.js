import React, { useState } from "react";
import {
  View,
  ScrollView,
  TextInput,
  Linking,
  Text,
  Image,
  styleheet,
  ImageBackground,
  TouchableOpacity, 
} from "react-native";
import SlideInView from "../SlideinView"
import style from "../../styles/global";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBars,
  faCheckCircle,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Hero = ({Showinfo,showtransaction}) => {
  

  const [transaction, setTransaction] = useState([{}]);
  useEffect(() => {
    // add logic here to fetch ongoing data from database, use ur logic for database request
    // create array of  each person to transactions[]
    // u can also use infintie scroll method to add more stuff link - https://levelup.gitconnected.com/react-native-infinite-scrolling-with-react-query-3c2cc69790be
    const fetcheddata = [
      {
        name: "Rahul",
        customer: "5233238522",
        price: "23,000",
        time: "Just Now",
        date: "22 July",
        success: false,
      },
      {
        name: "Rahul",
        customer: "5233238522",
        price: "23,000",
        time: "Just Now",
        date: "22 July",
        success: false,
      },
      {
        name: "Rahul",
        customer: "5233238522",
        price: "23,000",
        time: "Just Now",
        date: "22 July",
        success: true,
      },
      {
        name: "Rahul",
        customer: "5233238522",
        price: "23,000",
        time: "Just Now",
        date: "22 July",
        success: true,
      },
    ];
    setTransaction(fetcheddata);
  }, []);

  return (
    <View style={style.background}>
     <SlideInView>

      <ImageBackground
        source={require("../../assets/background.png")}
        style={[style.backgroundImage, style.fullbg]}
      >
        <ScrollView style={style.scrollView}>
          <TouchableOpacity
            style={[style.buttoncenter, style.button]}
            onPress={() => showtransaction(true)}
          >
            <Text style={style.buttontext}>ADD</Text>
          </TouchableOpacity>
          <View style={style.marginTop}>
            {transaction.map((item, val) => {
              return (
                <View key={val} style={style.heroboxes}>
                  <Text style={style.boxtime}>{item.time}</Text>
                  <TouchableOpacity
                    onPress={() => Showinfo(true)}
                    style={style.boxbody}
                  >
                    <View style={style.boxcontainer}>
                      <View>
                        <Text style={style.customerid}>
                          Customer : #{item.customer}
                        </Text>
                        <Text style={style.amount}>{item.price}</Text>
                        <Text style={style.managerid}>Made by {item.name}</Text>
                        <Text style={style.transactiontime}>{item.date}</Text>
                      </View>
                      <View style={style.status}>
                        {/* if the transaction is successfull, theres green tick else its crsos tick */}
                        {item.success ? (
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            size={30}
                            style={style.checkcircle}
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faXmarkCircle}
                            size={30}
                            style={style.checkcircle}
                          />
                        )}
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </ImageBackground>
     </SlideInView>

    </View>
  );
};
export default Hero;

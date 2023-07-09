import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import style from "../../styles/global";
import { ScrollView } from "react-native-gesture-handler";
import { PanResponder, Animated } from "react-native";
import FadeInView from "../FadeInView";
import SlideBackView from "../SlideBackView";

const Notification = () => {
  // implement ur logic to extract notifications for the user and also do what when the users deletes the noitifications
  const initialNotifications = [
    {
      id: "1",
      customerid: "2131313111",
      amount: "23,000",
      status: "failed",
    },
    {
      id: "2",
      customerid: "2131313111",
      amount: "23,000",
      status: "failed",
    },
    {
      id: "3",
      customerid: "2131313111",
      amount: "23,000",
      status: "success",
    },
    {
      id: "4",
      customerid: "2131313111",
      amount: "23,000",
      status: "rejected",
    },
    {
      id: "5",
      customerid: "2131313111",
      amount: "23,000",
      status: "rejected",
    },
    {
      id: "6",
      customerid: "2131313111",
      amount: "23,000",
      status: "rejected",
    },
    {
      id: "7",
      customerid: "2131313111",
      amount: "23,000",
      status: "due",
    },
    {
      id: "8",
      customerid: "2131313111",
      amount: "23,000",
      status: "rejected",
    },
  ];

  const [notification, setNotification] = useState(initialNotifications);
  const [pan, setPan] = useState({});
  const [responders, setResponders] = useState({});

  useEffect(() => {
    const createPanResponder = (id) => {
      return PanResponder.create({
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderMove: Animated.event([null, { dx: pan[id].x }], {
          useNativeDriver: false,
        }),
        onPanResponderRelease: (e, gestureState) => {
          if (gestureState.dx > 50) {
            // Swipe to the right, trigger delete
            onDelete(id);
            Animated.spring(pan[id], {
              toValue: { x: 0, y: 0 },
              useNativeDriver: false,
            }).start();
          } else {
            // Return to the initial position
            Animated.spring(pan[id], {
              toValue: { x: 0, y: 0 },
              useNativeDriver: false,
            }).start();
          }
        },
      });
    };

    const pan = {};
    const responders = {};

    initialNotifications.forEach((item) => {
      const id = item.id;
      pan[id] = new Animated.ValueXY();
      responders[id] = createPanResponder(id);
    });

    setPan(pan);
    setResponders(responders);
  }, []);

  const onDelete = (notificationId) => {
    setNotification((prevNotifications) =>
      prevNotifications.filter(
        (notification) => notification.id !== notificationId
      )
    );
  };

  const panStyle = (id) => {
    return {
      transform: pan[id]?.getTranslateTransform(),
    };
  };

  return (
    <View style={style.notficationbody}>
      <View style={style.notificationcontainer}>
          <Text style={[style.heading, style.bigheading]}>NOTIFICATIONS</Text>
          <ScrollView style={style.marginTop}>
            {notification.map((item) => {
              const id = item.id;
              return (
                <View key={id}>
                  <Animated.View style={[panStyle(id)]}>
                    {responders[id] && (
        <SlideBackView>
                      <View {...responders[id].panHandlers}>
                        <View style={style.notificationboxes}>
                          <View>
                            <Text style={style.notificationcustomerid}>
                              Customer ID: {item.customerid}
                            </Text>
                            <Text style={style.notificationamount}>
                              {item.amount}
                            </Text>
                          </View>
                          <View>
                            <TouchableOpacity
                              style={[
                                style.smallbutton,
                                item.status === "success"
                                  ? style.successbutton
                                  : item.status === "rejected"
                                  ? style.rejectbutton
                                  : item.status === "failed"
                                  ? style.failbutton
                                  : "",
                              ]}
                            >
                              <Text
                                style={[
                                  style.buttontext,
                                  item.status === "rejected"
                                    ? style.rejectbuttontext
                                    : item.status === "failed"
                                    ? style.failbuttontext
                                    : style.duebuttontext,
                                ]}
                              >
                                {item.status === "success"
                                  ? "ACCEPTED"
                                  : item.status === "rejected"
                                  ? "REJECTED"
                                  : item.status === "failed"
                                  ? "FAILED"
                                  : "DUE"}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
        </SlideBackView>
                    )}
                  </Animated.View>
                </View>
              );
            })}
          </ScrollView>
      </View>
    </View>
  );
};

export default Notification;

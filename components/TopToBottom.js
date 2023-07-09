import React, { useRef } from 'react';
import { View, Image, Animated } from 'react-native';

const TopToBottom = (props) => {
    const slideAnim = React.useRef(new Animated.Value(-50)).current;
    React.useEffect(() => {
        
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }).start();
        
      }, [ slideAnim]);

  return (
    <Animated.View
      style={[
            { transform: [{ translateY: slideAnim }] },
          ]}
    >
      {props.children}
    </Animated.View>
  );
};

export default TopToBottom;
import React, { useRef } from 'react';
import { View, Image, Animated } from 'react-native';

const SlideInView = (props) => {
    const slideAnim = React.useRef(new Animated.Value(-300)).current;
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
            { transform: [{ translateX: slideAnim }] },
          ]}
    >
      {props.children}
    </Animated.View>
  );
};

export default SlideInView;
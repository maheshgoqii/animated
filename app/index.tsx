import React from 'react';
import { Button, View } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';


function index() {
  const width = useSharedValue(100);

  const handlePress = () => {
    if (width.value >= 300) {
      width.value = withSpring(100);
      return;
    }
    width.value = withSpring(width.value + 50);
  };


  return (
    <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: "#fff" }}>
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: 'violet',
          borderRadius: 12
        }}
      />
      <Button onPress={handlePress} title="Click me" />

    </View>
  )
}

export default index
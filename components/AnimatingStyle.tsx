import React, { memo, useCallback } from 'react';
import { Button, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';


function AnimatingStyle() {
    const translateX = useSharedValue<number>(0);

    const handlePress = useCallback(() => {
        translateX.value += 50;
    }, []);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: withSpring(translateX.value * 2) }],
    }));

    return (
        <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: "#fff" }}>
            <Animated.View
                style={[{
                    width: 100,
                    height: 100,
                    backgroundColor: 'violet',
                    borderRadius: 12,
                    transform: [{ translateX }]
                },
                    animatedStyles
                ]}
            />
            <Button onPress={handlePress} title="Click me" />

        </View>
    )
}

export default memo(AnimatingStyle)
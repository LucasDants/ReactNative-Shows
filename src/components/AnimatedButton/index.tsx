import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {RectButton, PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import {useTheme} from 'styled-components';

import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

export function AnimatedButton() {
  const navigation = useNavigation();
  const {colors} = useTheme();

  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);

  const myCarsButtonStyle = useAnimatedStyle(() => ({
    transform: [{translateX: positionX.value}, {translateY: positionY.value}],
  }));

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, context: any) {
      context.positionX = positionX.value;
      context.positionY = positionY.value;
    },
    onActive(event, ctx) {
      positionX.value = event.translationX + ctx.positionX;
      positionY.value = event.translationY + ctx.positionY;
    },
  });

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={[myCarsButtonStyle, styles.animatedView]}>
        <ButtonAnimated
          style={[styles.button, {backgroundColor: colors.red[900]}]}
          onPress={() => navigation.navigate('Favorites')}>
          <Icon name="heart" size={22} color={colors.white} />
        </ButtonAnimated>
      </Animated.View>
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedView: {
    position: 'absolute',
    bottom: 13,
    right: 22,
  },
});

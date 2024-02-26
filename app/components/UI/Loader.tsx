import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  LinearTransition,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';

import {colors} from '../../utils/colors';
import { preDimensions } from '../../utils/preStyles';

interface Props {
  quantity?: number;
}

interface LoaderUIProps {
  id: number;
}

function LoaderUI({id}: LoaderUIProps): React.JSX.Element {
  const animate = useSharedValue<number>(0);

  const animateStyles = useAnimatedStyle(() => {
    const translateY = interpolate(animate.value, [0, 1], [0, 10]);
    return {
      transform: [
        {
          translateY,
        },
      ],
    };
  }, []);

  useEffect(() => {
    animate.value = withDelay(id * 100, withRepeat(withSpring(1), -1, true));
  }, []);

  return (
    <Animated.View
      layout={LinearTransition}
      style={[styles.loaderUI, animateStyles]}
    />
  );
}

export default function Loader({quantity = 4}: Props): React.JSX.Element {
  return (
    <View style={[styles.loaderContainer]}>
      {Array(quantity)
        .fill(null)
        .map((_, index) => (
          <LoaderUI key={index} id={index} />
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  loaderUI: {
    backgroundColor: colors.bgS,
    width: preDimensions.loaderDimension,
    height: preDimensions.loaderDimension,
    borderRadius: preDimensions.loaderDimension,
  },
  loaderContainer: {
    flexDirection: 'row',
    columnGap: preDimensions.loaderDimension * 2,
  },
});

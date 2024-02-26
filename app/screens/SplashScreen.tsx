import React, {useCallback, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Animated, {
  FadeIn,
  FadeInLeft,
  FlipInYLeft,
  LinearTransition,
  RollInLeft,
} from 'react-native-reanimated';

import {colors} from '../utils/colors';
import {fp, wp} from '../utils/config';
import {Fonts, common} from '../utils/preStyles';
import {CONSTANT_STRING} from '../utils/string';
import {RootStackParamList, RouteConstants} from '../utils/types';

import Loader from '../components/UI/Loader';

export default function SplashScreen(): React.JSX.Element {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const navigateToHome = useCallback(() => {
    navigation.dispatch({
      ...CommonActions.reset({
        index: 0,
        routes: [{name: RouteConstants.Home}],
      }),
    });
  }, [navigation]);


  useEffect(() => {
    const timeoutId = setTimeout(navigateToHome, 4300);
    return () => clearTimeout(timeoutId);
  }, [])

  return (
    <View style={[common.full_screen, common.center, styles.container]}>
      <View style={[common.orient_row, common.center, styles.subContainer]}>
        <Animated.View
          layout={LinearTransition}
          entering={RollInLeft.duration(800)}>
          <Animated.View
            entering={FlipInYLeft.delay(500).duration(1000).springify()}>
            <View style={[common.center, styles.acronymContainer]}>
              <Text style={[styles.acronym]}>{CONSTANT_STRING.acronym}</Text>
            </View>
          </Animated.View>
        </Animated.View>
        <Animated.View
          layout={LinearTransition}
          entering={FadeInLeft.springify()}>
          <Animated.Text style={[styles.backronym, styles.subBackronym]}>
            {CONSTANT_STRING.backronym1}
          </Animated.Text>
          <Text style={[styles.backronym]}>{CONSTANT_STRING.backronym2}</Text>
        </Animated.View>
      </View>
      <Animated.View
        entering={FadeIn.delay(1500)}
        style={[styles.loaderContainer]}>
        <Loader quantity={5} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgP,
  },
  subContainer: {
    columnGap: wp(5),
  },
  acronymContainer: {
    backgroundColor: colors.bgS,
    width: wp(20),
    height: wp(20),
    borderRadius: wp(3),
    shadowColor: colors.bgS,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  acronym: {
    fontSize: fp(36),
    color: colors.bgP,
    fontFamily: Fonts.P_700,
  },
  backronym: {
    fontSize: fp(42),
    color: colors.bgS,
    fontFamily: Fonts.S_500,
    lineHeight: fp(40),
  },
  subBackronym: {
    fontFamily: Fonts.S_700,
  },
  loaderContainer: {
    position: 'absolute',
    bottom: 100,
  },
});

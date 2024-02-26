import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import Animated, {
  BounceInUp,
  FadeIn,
  FadeInUp,
  FlipInYLeft,
  LinearTransition,
  SlideInLeft,
} from 'react-native-reanimated';

import {Fonts, common} from '../utils/preStyles';
import {colors} from '../utils/colors';
import {fp, hp, wp} from '../utils/config';
import {INFO_STRING} from '../utils/string';

import LinkUI from '../components/Home/LinkUI';

export default function HomeScreen(): React.JSX.Element {
  return (
    <View style={[common.full_screen]}>
      <MaskedView
        maskElement={
          <Animated.View
            layout={LinearTransition}
            entering={BounceInUp.delay(500).springify().duration(1500)}>
            <Animated.View entering={FlipInYLeft.delay(600)}>
              <View style={[styles.maskContainer]} />
            </Animated.View>
          </Animated.View>
        }>
        <View style={[styles.subContainer]}>
          <Text style={styles.title1}>{INFO_STRING.greet}</Text>
          <View style={[styles.nameContainer]}>
            <Text style={styles.firstName}>{INFO_STRING.firstName}</Text>
            <Text style={styles.lastName}>{INFO_STRING.lastName}</Text>
          </View>
        </View>
      </MaskedView>
      <View style={[styles.infoContainer]}>
        <Animated.Text entering={FadeIn.delay(1500)} style={styles.heading}>
          {INFO_STRING.titles[0]}
        </Animated.Text>
        <Animated.Text entering={FadeInUp.delay(1800)} style={styles.infotext}>
          {INFO_STRING.aboutMe}
        </Animated.Text>
        <Animated.Text
          entering={FadeInUp.delay(2200)}
          style={styles.subHeading}>
          {INFO_STRING.extra}
        </Animated.Text>
        <Animated.View entering={SlideInLeft.springify().delay(2400)} style={styles.linkContainer}>
          {INFO_STRING.socialLinks.map((item, index) => (
            <LinkUI key={index} title={item.title} text={item.link} />
          ))}
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maskContainer: {
    width: wp(120),
    height: wp(120),
    borderRadius: wp(75),
    backgroundColor: colors.purpleP,
    transform: [{translateX: -wp(30)}, {translateY: -hp(18)}],
    shadowColor: colors.bgP,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  subContainer: {
    backgroundColor: colors.purpleP,
    height: hp(42),
    paddingTop: hp(10),
    paddingLeft: wp(15),
  },
  linkContainer: {
    marginVertical: 20,
    rowGap: 10,
  },
  infoContainer: {
    paddingHorizontal: 10,
  },
  nameContainer: {
    marginLeft: wp(5),
  },
  heading: {
    color: colors.bgP,
    fontSize: fp(18),
    fontFamily: Fonts.P_500,
    letterSpacing: 1,
  },
  subHeading: {
    color: colors.bgP,
    fontSize: fp(16),
    fontFamily: Fonts.S_500,
  },
  infotext: {
    color: colors.bgP,
    fontSize: fp(14),
    fontFamily: Fonts.S_400,
    letterSpacing: 1,
    lineHeight: fp(20),
    marginVertical: 15,
  },
  title1: {
    color: colors.bgS,
    fontSize: fp(48),
    fontFamily: Fonts.P_200,
  },
  firstName: {
    color: colors.bgS,
    fontSize: fp(48),
    fontFamily: Fonts.S_700,
  },
  lastName: {
    color: colors.bgS,
    fontSize: fp(48),
    fontFamily: Fonts.S_700,
  },
  image: {
    width: wp(40),
    height: hp(40),
    borderRadius: wp(20),
    overflow: 'hidden',
  },
});

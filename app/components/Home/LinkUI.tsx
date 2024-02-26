import React, {useCallback} from 'react';
import {Text, StyleSheet, Linking, Pressable} from 'react-native';

import {Fonts, common} from '../../utils/preStyles';
import {colors} from '../../utils/colors';
import {fp} from '../../utils/config';

interface Props {
  title: string;
  text: string;
}

export default function LinkUI({
  title = '',
  text = '',
}: Props): React.JSX.Element {
  const openLink = useCallback(() => {
    Linking.openURL(text);
  }, []);
  return (
    <Pressable onPress={openLink} style={[common.orient_row, styles.container]}>
      <Text style={styles.title}>{title}: </Text>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    columnGap: 5,
  },
  title: {
    color: colors.bgP,
    fontSize: fp(14),
    fontFamily: Fonts.P_500,
  },
  text: {
    color: colors.purpleP,
    fontSize: fp(14),
    fontFamily: Fonts.S_400,
    letterSpacing: 1,
    textDecorationLine: 'underline',
  },
});

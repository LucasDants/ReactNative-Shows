import React, {useEffect, useState} from 'react';

import PINCode, {
  hasUserSetPinCode,
  resetPinCodeInternalStates,
  deleteUserPinCode,
} from '@haskkor/react-native-pincode';
import theme from '../../theme';
import {StackActions, useNavigation} from '@react-navigation/native';
import {BackHandler, StyleSheet} from 'react-native';

type PINStatusProps = 'choose' | 'locked' | 'enter';

export function LockScreen() {
  const [PINCodeStatus, setPINCodeStatus] = useState<PINStatusProps>('choose');
  const navigation = useNavigation();

  async function finishProcess() {
    navigation.dispatch(StackActions.replace('Shows'));
  }

  async function clearPin() {
    await deleteUserPinCode();
    await resetPinCodeInternalStates();
    BackHandler.exitApp();
  }

  useEffect(() => {
    hasUserSetPinCode().then(hasPinCode => {
      if (hasPinCode) {
        setPINCodeStatus('enter');
      }
    });
  }, []);

  return (
    <PINCode
      status={PINCodeStatus}
      // Containers
      styleMainContainer={styles.container}
      styleLockScreenMainContainer={styles.container}
      // Titles
      stylePinCodeTextTitle={styles.title}
      stylePinCodeColorTitle={styles.title.color}
      stylePinCodeTextSubtitle={styles.subtitle}
      stylePinCodeColorSubtitle={styles.subtitle.color}
      // Keyboard
      stylePinCodeTextButtonCircle={styles.title}
      stylePinCodeDeleteButtonText={styles.subtitle}
      colorCircleButtons={theme.colors.gray[400]}
      numbersButtonOverlayColor={theme.colors.red[900]}
      stylePinCodeButtonNumber={styles.title.color}
      stylePinCodeDeleteButtonColorShowUnderlay={theme.colors.red[900]}
      // Password Point
      colorPassword={theme.colors.red[900]}
      colorPasswordEmpty={theme.colors.gray[400]}
      stylePinCodeCircle={styles.pinCodeCircle}
      // Lock Screen
      styleLockScreenButton={{
        backgroundColor: theme.colors.red[900],
      }}
      styleLockScreenTitle={styles.title}
      styleLockScreenText={styles.subtitle}
      styleLockScreenTextTimer={styles.title}
      styleLockScreenViewTimer={{
        borderColor: theme.colors.red[900],
      }}
      finishProcess={finishProcess}
      textButtonLockedPage="Exit app and change your pin code"
      onClickButtonLockedPage={clearPin}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[900],
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    fontFamily: theme.fonts.title,
    color: theme.colors.white,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: theme.fonts.subtitle,
    color: theme.colors.gray[400],
  },
  pinCodeCircle: {
    height: 15,
    width: 15,
    borderRadius: 10,
  },
});

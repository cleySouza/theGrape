import React from 'react';
import {Text} from 'react-native';
import {RectButtonProps} from 'react-native-gesture-handler';
import {CoreButton} from '../../core';
import {styles} from './styled';

interface Props extends RectButtonProps {
  label?: string;
  children?: React.ReactNode;
}

export function Button({label, children, ...rest}: Props) {
  return (
    <CoreButton style={styles.container} {...rest}>
      {label && <Text>{label}</Text>}
      {children}
    </CoreButton>
  );
}

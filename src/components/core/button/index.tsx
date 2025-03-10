import React from 'react';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

interface Props extends RectButtonProps {
  children?: React.ReactNode;
}

export function Button({children, ...rest}: Props) {
  return <RectButton {...rest}>{children}</RectButton>;
}

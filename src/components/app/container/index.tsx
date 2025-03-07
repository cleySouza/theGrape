import {ReactNode} from 'react';
import {SafeAreaView, View, ViewProps} from 'react-native';
import styles from './styled';

interface Props extends ViewProps {
  children?: ReactNode;
}

export function Container({children}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
}

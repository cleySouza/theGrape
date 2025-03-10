import {Platform, StyleSheet} from 'react-native';
import {theme} from '../../../themes';

export const styles = StyleSheet.create({
  container: {
    padding: 6,
    borderRadius: 5,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    width: Platform.OS === 'ios' ? '40%' : '100%',
  },
});

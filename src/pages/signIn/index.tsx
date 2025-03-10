import {Button, Container} from '../../components/app';
import Logo from '../../assets/logoLogin.svg';
import LogoIOS from '../../assets/iOS.svg';
import LogoAndroid from '../../assets/android.svg';
import {Alert, Platform, Text, View} from 'react-native';
import {theme} from '../../themes';
import {useAuth} from '../../hooks';

interface Props {
  navigation: any;
}

export function SignIn({navigation}: Props) {
  const {signInWithGoogle} = useAuth();
  const platform = Platform.OS === 'ios' ? true : false;

  async function handleSignIn() {
    try {
      const userData = await signInWithGoogle();
      console.log(userData);
      navigation.navigate('dashboard');
    } catch (error) {
      Alert.alert('Erro ao fazer o login', (error as Error).message);
    }
  }

  return (
    <Container>
      <Logo />
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          position: 'absolute',
          bottom: '3%',
        }}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              zIndex: 999,
              position: 'absolute',
              backgroundColor: theme.colors.gray100,
              paddingHorizontal: '5%',
              borderRadius: 5,
              fontSize: 24,
            }}>
            Entrar
          </Text>
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: 'black',
            }}
          />
        </View>

        <View
          style={{
            paddingHorizontal: 20,
            width: '100%',
            paddingVertical: '10%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <Button onPress={handleSignIn}>
            <LogoAndroid />
          </Button>

          {platform && (
            <Button onPress={handleSignIn}>
              <LogoIOS />
            </Button>
          )}
        </View>
      </View>
    </Container>
  );
}

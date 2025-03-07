import {Container} from '../../components/app';
import Logo from '../../assets/logoLogin.svg';
import LogoIOS from '../../assets/iOS.svg';
import LogoAndroid from '../../assets/android.svg';
import {Alert, Platform, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../../themes';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

interface Props {
  navigation: any;
}

export function SignIn({navigation}: Props) {
  const platform = Platform.OS === 'ios' ? true : false;

  async function handleSignIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const {data} = await GoogleSignin.signIn();
      const token = data?.idToken;

      if (!token) {
        throw new Error('ID Token não encontrado!');
      }

      // Criar credencial para o Firebase
      const googleCredential = auth.GoogleAuthProvider.credential(token);

      // Fazer login com Firebase
      await auth().signInWithCredential(googleCredential);

      navigation.navigate('dashboard');
    } catch (error) {
      Alert.alert('Erro ao fazer login: ', String(error));
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
          <TouchableOpacity
            onPress={handleSignIn}
            style={{
              padding: 6,
              borderRadius: 5,
              backgroundColor: theme.colors.white,
              alignItems: 'center',
              width: Platform.OS === 'ios' ? '40%' : '100%',
            }}>
            <LogoAndroid />
          </TouchableOpacity>
          {platform && (
            <TouchableOpacity
              style={{
                padding: 6,
                borderRadius: 5,
                backgroundColor: theme.colors.white,
                alignItems: 'center',
                width: '40%',
              }}>
              <LogoIOS />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Container>
  );
}

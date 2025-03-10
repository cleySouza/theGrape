import { atom, useAtom } from 'jotai';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {Alert} from 'react-native';

const userAtom = atom<FirebaseAuthTypes.User | null>(null);

export function useAuth() {
    const [user, setUser] = useAtom(userAtom);

    async function signInWithGoogle() {
        try {
            await GoogleSignin.hasPlayServices();
            const { data } = await GoogleSignin.signIn();
            const token = data?.idToken;

            if (!token) {
                throw new Error('ID Token não encontrado!');
            }

            const googleCredential = auth.GoogleAuthProvider.credential(token);

            const userCredential = await auth().signInWithCredential(
                googleCredential,
            );

            setUser(userCredential.user);
            return userCredential.user;
        } catch (error) {
            Alert.alert('Erro ao realizar login');
            throw error;
        }
    }

    async function signOut() {
        try {
            await auth().signOut();
            await GoogleSignin.signOut();
            setUser(null);
        } catch (error) {
            Alert.alert('Erro ao realizar logout');
        }
    }

    return { user, signInWithGoogle, signOut };
}

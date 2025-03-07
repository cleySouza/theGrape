import React, {useEffect} from 'react';
import {Routes} from './src/routes';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

function App(): React.JSX.Element {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '382066247512-7v3ib6k0s57hrpg0jgirdnu47d4srin2.apps.googleusercontent.com', // Pegue no Firebase
    });
  }, []);

  return <Routes />;
}

export default App;

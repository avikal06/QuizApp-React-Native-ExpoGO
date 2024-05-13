import {auth} from '../../firebaseConfig';
import { Platform, ToastAndroid, Alert } from 'react-native';
import{signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut} from 'firebase/auth'


export const signIn = (email, password) => {
  signInWithEmailAndPassword(auth,email, password)
    .then(() => {
      if (Platform.OS === 'android') {
        ToastAndroid.show('Logged in', ToastAndroid.SHORT);
      } else {
        Alert.alert('Logged in');
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth,email, password)
    .then(() => {
      if (Platform.OS === 'android') {
        ToastAndroid.show('Signed up', ToastAndroid.SHORT);
      } else {
        Alert.alert('Signed up');
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export const signOutFromApp = () => {
  signOut(auth)
    .then(() => {
      if (Platform.OS === 'android') {
        ToastAndroid.show('Signed Out', ToastAndroid.SHORT);
      } else {
        Alert.alert('Signed Out');
      }
    });
};

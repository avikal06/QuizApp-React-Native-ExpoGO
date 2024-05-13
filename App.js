import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './src/navigator/AuthStackNavigator';
import { auth } from './firebaseConfig'; // Update the import statement
import AppStackNavigator from './src/navigator/AppStackNavigator';
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    return subscriber; // unsubscribe on unmount
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <NavigationContainer>
      {currentUser ? <AppStackNavigator />: <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default App;

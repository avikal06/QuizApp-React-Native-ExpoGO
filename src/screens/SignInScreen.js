import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, Keyboard, Platform, Animated } from 'react-native';
import FormInput from '../components/shared/FormInput';
import FormButton from '../components/shared/FormButton';
import { COLORS } from '../constants/theme';
// import {signIn} from '../utils/auth';
import {signIn} from '../utils/auth';
const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [containerPosition] = useState(new Animated.Value(100));

  const moveContainerUp = () => {
    Animated.timing(containerPosition, {
      toValue: -50,
      duration: 300,
      useNativeDriver: false
    }).start();
  };

  const moveContainerDown = () => {
    Animated.timing(containerPosition, {
      toValue: 100,
      duration: 300,
      useNativeDriver: false
    }).start();
  };

  const handleOnSubmit = () => {
    if (email !== '' && password !== '') {
        signIn(email, password);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../../assets/doodle.jpeg")}
          style={{
            width: '100%',
            height: 300,
            resizeMode:'cover',
            marginTop: 20
          }}
        />
        <Animated.View
          style={{
            alignItems: 'center',
            padding: 16,
            transform: [{ translateY: containerPosition }]
          }}
        >
          {/* Header */}
          <Text style={{ fontSize: 24, color: COLORS.black, fontWeight: 'bold', marginVertical:10, marginTop:0 }}>
            Login
          </Text>

          {/* Email */}
          <TextInput
            style={{
              padding: 10,
              borderColor: COLORS.black + '20',
              borderWidth: 1,
              width: '85%',
              borderRadius: 5,
              marginBottom: 20
            }}
            placeholder="Enter your email"
            onChangeText={value => setEmail(value)}
            value={email}
            keyboardType={'email-address'}
            onFocus={moveContainerUp}
            onBlur={moveContainerDown}
          />

          {/* Password */}
          <TextInput
            style={{
              padding: 10,
              borderColor: COLORS.black + '20',
              borderWidth: 1,
              width: '85%',
              borderRadius: 5,
              marginBottom: 20
            }}
            placeholder="Enter your password"
            onChangeText={value => setPassword(value)}
            value={password}
            secureTextEntry={true}
            onFocus={moveContainerUp}
            onBlur={moveContainerDown}
          />

          {/* Submit button */}
          <FormButton
            labelText="Submit"
            handleOnPress={handleOnSubmit}
            style={{ width: '85%', marginBottom: 20 }}
          />

          {/* Footer */}
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}
            onPress={() => navigation.navigate('SignUpScreen')}
          >
            <Text>Don't have an account?</Text>
            <Text style={{ marginLeft: 4, color: COLORS.primary }}>
              Create account
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

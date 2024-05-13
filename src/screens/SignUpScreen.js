import React, { useState } from 'react';
import { View, Text, SafeAreaView, Alert, Image, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FormButton from '../components/shared/FormButton';
import FormInput from '../components/shared/FormInput';
import { COLORS } from '../constants/theme';
import {signUp} from '../utils/auth'

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleOnSubmit = () => {
    if (email != '' && password != '' && confirmPassword != '') {
        if (password == confirmPassword) {
          //   SignUp
          signUp(email, password);
        } else {
          Alert.alert('password did not match');
        }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', padding: 20 }}>
          {/* Header */}
          <Image
            source={require("../../assets/signup.jpeg")}
            style={{
              width: '100%',
              height: 300,
              resizeMode: 'cover',
              marginTop: 0
            }}
          />
          <Text
            style={{
              fontSize: 24,
              color: COLORS.black,
              fontWeight: 'bold',
              marginVertical: 0,
              marginBottom:15
            }}>
            Sign Up
          </Text>

          {/* Email */}
          <FormInput
            labelText="Email"
            placeholderText="enter your email"
            onChangeText={value => setEmail(value)}
            value={email}
            keyboardType={'email-address'}
          />

          {/* Password */}
          <FormInput
            labelText="Password"
            placeholderText="enter your password"
            onChangeText={value => setPassword(value)}
            value={password}
            secureTextEntry={true}
          />

          {/* Confirm Password */}
          <FormInput
            labelText="Confirm Password"
            placeholderText="enter your password again"
            onChangeText={value => setConfirmPassword(value)}
            value={confirmPassword}
            secureTextEntry={true}
          />

          {/* Submit button */}
          <FormButton
            labelText="Sign up"
            handleOnPress={handleOnSubmit}
            style={{ width: '85%' }}
          />

          {/* Footer */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
            <Text>Already have an account?</Text>
            <Text
              style={{ marginLeft: 4, color: COLORS.primary }}
              onPress={() => navigation.navigate('SignInScreen')}>
              Sign in
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

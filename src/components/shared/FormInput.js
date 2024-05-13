import React from 'react';
import {View, Text, TextInput,KeyboardAvoidingView, Platform} from 'react-native';
import {COLORS} from '../../constants/theme';

const FormInput = ({
  labelText = '',
  placeholderText = '',
  onChangeText = null,
  value = null,
  ...more
}) => {
  return (
    <View style={{width: '100%', marginBottom: 20,flex:0.1,justifyContent:'center', alignContent:'center'}}>
        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={100} style ={{flex:1}}>
      <Text style={{marginLeft:30, marginBottom:0}}>{labelText}</Text>
      <TextInput
        style={{
          padding: 10,
          borderColor: COLORS.black + '20',
          borderWidth: 1,
          width: '85%',
          borderRadius: 5,
          marginLeft:30,
          marginRight:30
        }}
        placeholder={placeholderText}
        onChangeText={onChangeText}
        value={value}
        {...more}
      />
      </KeyboardAvoidingView>
    </View>
  );
};

export default FormInput;

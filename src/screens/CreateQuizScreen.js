import React, { useState } from 'react';
import { View, Text, SafeAreaView, ToastAndroid, TextInput } from 'react-native';
import { COLORS } from '../constants/theme';
import FormInput from '../components/shared/FormInput';
import FormButton from '../components/shared/FormButton';
import { createQuiz } from '../utils/database';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const CreateQuizScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [timerValue, setTimerValue] = useState('60'); // Initial timer value is 60 seconds

  const handleQuizSave = async () => {
    const currentQuizId = Math.floor(100000 + Math.random() * 9000).toString();
    // Save to firestore
    await createQuiz(currentQuizId, title, description, parseInt(timerValue));

    // Navigate to Add Question screen
    navigation.navigate('AddQuestionScreen', {
      currentQuizId: currentQuizId,
      currentQuizTitle: title,
    });

    // Reset
    setTitle('');
    setDescription('');
    setTimerValue('60'); // Reset timer value to 60 seconds
    ToastAndroid.show('Quiz Saved', ToastAndroid.SHORT);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 20,
      }}>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginVertical: 20,
          fontWeight: 'bold',
          color: COLORS.black,
        }}>
        Create Quiz
      </Text>

      <FormInput
        labelText="Title"
        placeholderText="Enter quiz title"
        onChangeText={(val) => setTitle(val)}
        value={title}
      />
      <FormInput
        labelText="Description"
        placeholderText="Enter quiz description"
        onChangeText={(val) => setDescription(val)}
        value={description}
      />

      {/* Timer Form */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginBottom:30 }}>
        <Text style={{ marginRight: 10, marginLeft:70 }}>Timer (seconds):</Text>
        <CountdownCircleTimer
          isPlaying={false}
          duration={parseInt(timerValue)}
          size={50}
          strokeWidth={5}
          colors={[['#004777', 0.4], ['#F7B801', 0.4], ['#A30000']]}
          onComplete={() => [true, 0]}
        >
          {({ remainingTime, animatedColor }) => (
            <Text style={{ color: animatedColor }}>{remainingTime}</Text>
          )}
        </CountdownCircleTimer>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: COLORS.gray,
            borderRadius: 5,
            paddingLeft: 10,
            flex: 1,
            marginLeft: 10,
            maxWidth:50
          }}
          placeholder="Enter timer value"
          keyboardType="numeric"
          onChangeText={(val) => setTimerValue(val)}
          value={timerValue}
        />
      </View>

      <FormButton labelText="Save Quiz" style={{ width: 300, marginLeft: 50 }} handleOnPress={handleQuizSave} />
    </SafeAreaView>
  );
};

export default CreateQuizScreen;

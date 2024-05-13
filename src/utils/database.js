import { db } from '../../firebaseConfig';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'; // Import Firestore functions

// Create new quiz
export const createQuiz = async (currentQuizId, title, description, timerValue) => {
  try {
    await setDoc(doc(db, 'Quizzes', currentQuizId), {
      title,
      description,
      timerValue,
    });
    console.log('Quiz created successfully');
  } catch (error) {
    console.error('Error creating quiz: ', error);
    throw error;
  }
};
// Create new question for current quiz
export const createQuestion = async (currentQuizId, currentQuestionId, question) => {
  try {
    await setDoc(doc(db, 'Quizzes', currentQuizId, 'QNA', currentQuestionId), question);
    console.log('Question created successfully');
  } catch (error) {
    console.error('Error creating question: ', error);
    throw error;
  }
};

// Get All Quizzes
export const getQuizzes = () => {
    return getDocs(collection(db, 'Quizzes'));
  };

// Get Quiz Details by id
export const getQuizById = async (currentQuizId) => {
  const quizRef = doc(db, 'Quizzes', currentQuizId);
  const docSnap = await getDoc(quizRef);
  return docSnap;
};

// Get Questions by currentQuizId
export const getQuestionsByQuizId = async (currentQuizId) => {
  const questionsRef = collection(db, 'Quizzes', currentQuizId, 'QNA');
  const querySnapshot = await getDocs(questionsRef);
   return querySnapshot; 
  //  .docs.map((doc) => doc.data());
};

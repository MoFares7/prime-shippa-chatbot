import { configureStore } from '@reduxjs/toolkit';
import getAnswerReducer from './feature/chat/services/get_answer_service';
import getQuestionsReducer from './feature/chat/services/get_question_service';

const store = configureStore({
        reducer: {
                getAnswer: getAnswerReducer,
                getQuestions: getQuestionsReducer

        }
});

export default store;
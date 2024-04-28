import { configureStore } from '@reduxjs/toolkit';
import getAnswerReducer from './feature/chat/services/get_answer_service';

const store = configureStore({
        reducer: {
                getAnswer: getAnswerReducer,
         
        }
});

export default store;
import { configureStore } from '@reduxjs/toolkit';
import getAnswerReducer from './feature/chat/services/get_answer_service';
import getQuestionsReducer from './feature/chat/services/get_question_service';
import getMyShipmentReducer from './feature/chat/services/get_my_shipment_service';

const store = configureStore({
        reducer: {
                getAnswer: getAnswerReducer,
                getQuestions: getQuestionsReducer,
                getMyShipment: getMyShipmentReducer
        }
});

export default store;
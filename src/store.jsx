// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux'; // Import combineReducers
import createSagaMiddleware from 'redux-saga';
import usNewsReducer from './feature/home/services/us_service/us_news_slice';
import getTechCrunchReducer from './feature/home/services/techCrunch_service/tech_crunch_slice';
import teslaNewsReducer from './feature/home/services/tesla_service/tesla_news_slice';
import booksNewsReducer from './feature/education/services/book_news_slice';
import variousNewsReducer from './feature/various/services/various_news_slice';
import rootSaga from './api/saga_root';

const rootReducer = combineReducers({
        usNews: usNewsReducer,
        getTechCrunch: getTechCrunchReducer,
        teslaNews: teslaNewsReducer,
        booksNews: booksNewsReducer,
        variousNews: variousNewsReducer

});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;

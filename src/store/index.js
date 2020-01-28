import { createStore } from 'redux';
import chatReducer from '../reducer/chatReducer';

const store = createStore(chatReducer);

export default store;
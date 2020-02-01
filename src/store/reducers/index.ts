import { combineReducers } from 'redux';

import { chatDataReducer } from "./ChatData";
import { dataReducer } from './Data';

export default combineReducers({
  chatData: chatDataReducer,
  data: dataReducer
});
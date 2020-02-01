import { Data, DataActionTypes, DONE_PROCCESSING_DATA } from '../types/Data';
import { RESET_CHATS } from '../types/ChatData';

export const initialState: Data = {
  totals: {
    sumMessages: 0,
    sumWords: 0,
    words: {
      first: [],
      second: []
    },
    days: 0,
    firstParticipant: {
      messages: 0,
      words: 0,
      name: ""
    },
    secondParticipant: {
      messages: 0,
      words: 0,
      name: ""
    }
  },
  firstMessage: {
    content: "",
    sender_name: "",
    timestamp_ms: 0,
    type: ""
  },
  lastMessage: {
    content: "",
    sender_name: "",
    timestamp_ms: 0,
    type: ""
  },
  averages: {
    first: {
      wordsPerMessage: 0,
      wordsPerDay: 0,
      messagesPerDay: 0,
      name: ""
    },
    second: {
      wordsPerMessage: 0,
      wordsPerDay: 0,
      messagesPerDay: 0,
      name: ""
    }
  },
  messagesOfDate: [],
  dayActivity: {
    first: [],
    second: []
  }
};

export function dataReducer(state: Data = initialState, action: DataActionTypes): Data {
  console.log(action.type);
  switch (action.type) {
    case RESET_CHATS:
      return initialState;
    case DONE_PROCCESSING_DATA:
      //return action.payload;
      return { totals: action.payload.totals, firstMessage: action.payload.firstMessage, lastMessage: action.payload.lastMessage, averages: action.payload.averages, messagesOfDate: action.payload.messagesOfDate, dayActivity: action.payload.dayActivity };
    default:
      return state;
  }
}
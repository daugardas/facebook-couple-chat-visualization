import { Chats as ChatsState, UploadChatsTypes, DONE_UPLOAD_CHATS, RESET_CHATS } from '../types/ChatData';

//const jsonData: any = require("../../testData/testState.json");

const initialState: ChatsState = {
  chats: [
    {
      messages: [],
      participants: [],
      title: "Please upload a folder containing JSON data files of your Facebook conversation with one person"
    }
  ]
};


//const initialState: ChatsState = jsonData.chatData;

export function chatDataReducer(state: ChatsState = initialState, action: UploadChatsTypes): ChatsState {
  switch (action.type) {
    case RESET_CHATS:
      return initialState;
    case DONE_UPLOAD_CHATS:
      return { ...state, chats: action.payload.chats };
    default:
      return state;
  }
}
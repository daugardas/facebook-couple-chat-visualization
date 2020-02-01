import { Action } from 'redux';

export const START_UPLOAD_CHATS: string = "START_UPLOAD_CHATS";
export const DONE_UPLOAD_CHATS: string = "DONE_UPLOAD_CHATS";
export const RESET_CHATS: string = "RESET_CHATS";

interface ResetChatsAction extends Action {
  type: typeof RESET_CHATS;
  payload?: any;
}

interface StartUploadChatsAction extends Action {
  type: typeof START_UPLOAD_CHATS;
  payload?: any;
};

interface DoneUploadChatsAction extends Action {
  type: typeof DONE_UPLOAD_CHATS;
  payload: Chats;
};

interface Messages {
  context: string;
  sender_name: string;
  timestamp_ms: number;
  type: string;
};

interface Participants {
  name: string;
};

export interface Chat {
  messages: Messages[];
  participants: Participants[];
  title: string;
};

export interface Chats { // uploaded Chats type
  chats: Chat[];
}

export type UploadChatsTypes = DoneUploadChatsAction | StartUploadChatsAction | ResetChatsAction;
import { START_UPLOAD_CHATS, DONE_UPLOAD_CHATS, RESET_CHATS, Chats, UploadChatsTypes } from '../types/ChatData';
import { uploadFiles } from '../../services/Upload';

export function startUploadingFiles(files: FileList): UploadChatsTypes {
  uploadFiles(files);

  return {
    type: START_UPLOAD_CHATS
  }
}

export function doneUploadingFiles(chats: Chats): UploadChatsTypes {
  return {
    type: DONE_UPLOAD_CHATS,
    payload: chats
  }
}

export function resetUploadedChatData(): UploadChatsTypes {
  return {
    type: RESET_CHATS
  };
}
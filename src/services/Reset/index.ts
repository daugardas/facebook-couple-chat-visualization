import { store } from '../../store'
import { resetUploadedChatData } from '../../store/actions/ChatData';

export const resetData = (): void => {
  store.dispatch(resetUploadedChatData());
};
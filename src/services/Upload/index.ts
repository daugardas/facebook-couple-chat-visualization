import { Chats, Chat } from '../../store/types/ChatData';
import { doneUploadingFiles } from '../../store/actions/ChatData';
import { store } from '../../store';

import { encode, decode } from 'iconv-lite'

const readFileAsync = (file: File) => {
  return new Promise((resolve, reject) => {
    let reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      let result = JSON.parse(e.target.result);

      //fixing the encoding facebook fucked up
      result.title = decode(encode(result.title, "ISO-8859-1"), "utf8")
      result.participants.map((obj: any) => obj.name = decode(encode(obj.name, "ISO-8859-1"), "utf8"));
      for (let i = 0; i < result.messages.length; i++) {
        result.messages[i].sender_name = decode(encode(result.messages[i].sender_name, "ISO-8859-1"), "utf8");
        result.messages[i].content = decode(encode(result.messages[i].content, "ISO-8859-1"), "utf8");
      }

      resolve(result);
    };
    reader.onerror = reject;
    reader.readAsText(file);
  });
};

export async function uploadFiles(files: FileList) {
  let chats: Chat[] = new Array(files.length);
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    let parsedFile: any = await readFileAsync(file);
    chats[i] = {
      messages: parsedFile.messages,
      participants: parsedFile.participants,
      title: parsedFile.title
    };
  }
  store.dispatch(doneUploadingFiles({ chats } as Chats));
};
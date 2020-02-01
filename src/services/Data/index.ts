import { groupBy, map, sortBy, findIndex } from 'lodash';

import { doneProccesingData } from '../../store/actions/Data';
import { Data, Message, MessagesOfDate } from '../../store/types/Data';
import { store } from '../../store';
import { initialState } from '../../store/reducers/Data';


export function proccessData() {

  let data: Data = initialState;
  const currentState = store.getState();
  //console.log(currentState);

  let allMessages: any = [];
  data.dayActivity.first = new Array(24);
  data.dayActivity.second = new Array(24);

  for (let i = 0; i < 24; i++) {
    data.dayActivity.first[i] = 0;
    data.dayActivity.second[i] = 0;
  }

  data.totals.firstParticipant.name = currentState.chatData.chats[0].participants[0].name;
  data.totals.secondParticipant.name = currentState.chatData.chats[0].participants[1].name;
  for (let i = 0; i < currentState.chatData.chats.length; i++) {
    for (let j = 0; j < currentState.chatData.chats[i].messages.length; j++) {
      const message: Message = currentState.chatData.chats[i].messages[j];

      if (message.type === "Generic") {
        const dateOfMessage = new Date(message.timestamp_ms);
        const ISODate = dateOfMessage.toISOString().split("T")[0];
        allMessages.push({ ...message, date: ISODate });
        if (message.timestamp_ms > data.lastMessage.timestamp_ms || data.lastMessage.timestamp_ms === 0) data.lastMessage = { ...message };
        if (message.timestamp_ms < data.firstMessage.timestamp_ms || data.firstMessage.timestamp_ms === 0) data.firstMessage = { ...message };
        if (message.sender_name === data.totals.firstParticipant.name) {
          data.totals.firstParticipant.messages++;
          data.totals.firstParticipant.words += getWordCountFromMessage(message.content);
          data.dayActivity.first[dateOfMessage.getHours()]++;
        } else {
          data.totals.secondParticipant.messages++;
          data.totals.secondParticipant.words += getWordCountFromMessage(message.content);
          data.dayActivity.second[dateOfMessage.getHours()]++;
        }
      }
    }
  }
  data.totals.days = Math.round((data.lastMessage.timestamp_ms - data.firstMessage.timestamp_ms) / (1000 * 60 * 60 * 24));
  data.totals.sumMessages = data.totals.firstParticipant.messages + data.totals.secondParticipant.messages;
  data.totals.sumWords = data.totals.firstParticipant.words + data.totals.secondParticipant.words;

  data.averages.first.wordsPerMessage = Math.round(data.totals.firstParticipant.words / data.totals.firstParticipant.messages);
  data.averages.second.wordsPerMessage = Math.round(data.totals.secondParticipant.words / data.totals.secondParticipant.messages);
  data.averages.first.wordsPerDay = Math.round(data.totals.firstParticipant.words / data.totals.days);
  data.averages.second.wordsPerDay = Math.round(data.totals.secondParticipant.words / data.totals.days);
  data.averages.first.messagesPerDay = Math.round(data.totals.firstParticipant.messages / data.totals.days);
  data.averages.second.messagesPerDay = Math.round(data.totals.secondParticipant.messages / data.totals.days);
  data.averages.first.name = data.totals.firstParticipant.name;
  data.averages.second.name = data.totals.secondParticipant.name;

  let messagesOfDay: any = groupBy(allMessages, 'date');
  messagesOfDay = sortBy(map(messagesOfDay, (messages, date) => ({ date, messages })), ["date"]);
  data.messagesOfDate = messagesOfDay;
  data.messagesOfDate = messagesOfDateByParticipant(data);

  data.totals.words.first = [];
  data.totals.words.second = [];

  data.messagesOfDate.forEach((date) => {
    const firstMessages = date.first.messages;
    const secondMessages = date.second.messages;

    firstMessages.forEach((message) => {
      message.content.split(" ").forEach((word: string) => {
        word = word.toLocaleLowerCase();
        word = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let cleanedWord: any = word.length > 0 ? word.match(/[a-zA-Z]+/g) : null;
        if (cleanedWord) {
          cleanedWord = cleanedWord[0];
          // find the word in the words.first array
          // if there is no such word, then create a new object containing that word and set its count value to 1;
          const wordIndex = findIndex(data.totals.words.first, { name: cleanedWord });
          if (wordIndex === -1) {
            data.totals.words.first.push({ name: cleanedWord, value: 1, firstTimeDate: message.date as string });
          } else {
            data.totals.words.first[wordIndex].value++;
          }
        }

      });
    });
    secondMessages.forEach((message) => {
      message.content.split(" ").forEach((word: string) => {
        word = word.toLocaleLowerCase();
        word = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let cleanedWord: any = word.length > 0 ? word.match(/[a-zA-Z]+/g) : null;
        if (cleanedWord) {
          cleanedWord = cleanedWord[0];
          const wordIndex = findIndex(data.totals.words.second, { name: cleanedWord });
          if (wordIndex === -1) {
            data.totals.words.second.push({ name: cleanedWord, value: 1, firstTimeDate: message.date as string });
          } else {
            data.totals.words.second[wordIndex].value++;
          }
        }

      });
    });
  });
  data.totals.words.first = sortBy(data.totals.words.first, ["value"]);
  data.totals.words.second = sortBy(data.totals.words.second, ["value"]);
  data.totals.words.first = data.totals.words.first.slice(data.totals.words.first.length - 60 - 1);
  data.totals.words.second = data.totals.words.second.slice(data.totals.words.second.length - 60 - 1);
  store.dispatch(doneProccesingData(data));
}

function getDates(startDate: any, endDate: any, names: string[]) {
  let dates: any[] = [],
    currentDate: Date = startDate,
    addDays = function (date: Date, days: number) {
      date.setDate(date.getDate() + days);
      return date;
    };
  while (currentDate <= endDate) {
    dates.push({
      date: currentDate.toISOString().split("T")[0],
      first: { name: names[0], messages: [], wordCount: 0 },
      second: { name: names[1], messages: [], wordCount: 0 }
    });
    currentDate = addDays(currentDate, 1);
  }
  return dates;
}

function messagesOfDateByParticipant(data: any) {
  const firstDate: string = data.messagesOfDate[0].date;
  const lastDate: string = data.messagesOfDate[data.messagesOfDate.length - 1].date;
  const newMessagesOfDate: MessagesOfDate[] = getDates(new Date(firstDate), new Date(lastDate), [data.totals.firstParticipant.name, data.totals.secondParticipant.name]);
  for (let i = 0; i < data.messagesOfDate.length; i++) {
    const obj: any = data.messagesOfDate[i];
    const newObj: any = { date: "", first: { name: "", messages: [], wordCount: 0 }, second: { name: "", messages: [], wordCount: 0 } };
    const date: string = obj.date;
    const messages: any[] = obj.messages;
    newObj.date = date;
    newObj.first.name = data.totals.firstParticipant.name;
    newObj.first.wordCount = 0;
    newObj.second.name = data.totals.secondParticipant.name;
    newObj.second.wordCount = 0;
    newObj.first.messages = [];
    for (let j = 0; j < messages.length; j++) {
      if (messages[j].sender_name === data.totals.firstParticipant.name) {
        newObj.first.messages.push({ ...messages[j] });
        newObj.first.wordCount += messages[j].content.split(" ").length;
      } else {
        newObj.second.messages.push({ ...messages[j] });
        newObj.second.wordCount += messages[j].content.split(" ").length;
      }
    }

    for (let j = 0; j < newMessagesOfDate.length; j++) {
      if (date === newMessagesOfDate[j].date) {
        newMessagesOfDate[j] = { ...newObj };
        break;
      }
    }
  }
  return newMessagesOfDate;
}

function getWordCountFromMessage(message: string): number {
  return message.split(" ").length;
}
export const START_PROCCESSING_DATA: string = "START_PROCCESSING_DATA";
export const DONE_PROCCESSING_DATA: string = "DONE_PROCCESSING_DATA";

interface StartProccessingDataAction {
  type: typeof START_PROCCESSING_DATA;
  payload?: any;
};

interface DoneProccessingDataAction {
  type: typeof DONE_PROCCESSING_DATA;
  payload?: any;
};

export interface Message {
  content: string;
  sender_name: string;
  timestamp_ms: number;
  type: string;
  date?: string;
};

interface ParticipantAverages {
  wordsPerMessage: number;
  messagesPerDay: number;
  wordsPerDay: number;
  name: string;
}

interface Averages {
  first: ParticipantAverages;
  second: ParticipantAverages;
};

export interface MessagesOfDate {
  date: string;
  first: {
    name: string;
    messages: Message[];
    wordCount: number;
  },
  second: {
    name: string;
    messages: Message[];
    wordCount: number;
  }
}

interface WordCount {
  name: string;
  value: number;
  firstTimeDate: string;
}

export interface Data {
  totals: {
    sumMessages: number;
    sumWords: number;
    words: { first: WordCount[], second: WordCount[] };
    days: number;
    firstParticipant: {
      messages: number;
      words: number;
      name: string;
    };
    secondParticipant: {
      messages: number;
      words: number;
      name: string;
    };
  };
  firstMessage: Message;
  lastMessage: Message;
  averages: Averages;
  messagesOfDate: MessagesOfDate[];
  dayActivity: {
    first: number[],
    second: number[]
  }
};

export type DataActionTypes = StartProccessingDataAction | DoneProccessingDataAction;
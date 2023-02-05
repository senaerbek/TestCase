import {User} from './userModel';

export interface MessageModel {
  id: number;
  user: User;
  message: Message;
}

export interface Message {
  content: string;
  createdAt: string;
}

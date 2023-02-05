import {User} from './userModel';

export interface PostModel {
  id: number;
  user: User;
  imageUri: string;
  caption: string;
  likesCount: string;
  postedAt: string;
  bookmarkCount: string;
  commentCount: string;
}

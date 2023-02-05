export interface StoryModel {
  id: number;
  user: User;
}

export interface User {
  imageUri: string | NodeRequire;
}

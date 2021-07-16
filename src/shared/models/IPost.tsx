import { EditorState } from "draft-js";

export default interface IPost {
  id?: string;
  title: string;
  thumbnail: string;
  description: string;
  categories: string[];
  author: string;
  authorPic: string;
  createdAt: Date;
  body: EditorState;
}

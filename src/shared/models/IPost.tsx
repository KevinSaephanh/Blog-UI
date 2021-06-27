import { EditorState } from "draft-js";

export default interface IPost {
  id?: string;
  title: string;
  thumbnail: string;
  desc: string;
  categories: string[];
  creator: string;
  creatorProfilePic: string;
  dateCreated: Date;
  body: EditorState;
}

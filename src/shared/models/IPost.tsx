import IPicture from "./IPicture";
import ISection from "./ISection";

export default interface IPost {
  id?: string;
  title: string;
  desc: string;
  categories: string[];
  user: string;
  userProfilePic: string;
  dateCreated: Date;
  thumbnail: IPicture;
  sections: ISection[];
}

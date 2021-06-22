import ISection from "./ISection";

export default interface IPost {
  id?: string;
  title: string;
  categories: string[];
  user: string;
  userProfilePic: string;
  dateCreated: Date;
  thumbnail: string;
  thumbnailCredit?: string;
  sections: ISection[];
}

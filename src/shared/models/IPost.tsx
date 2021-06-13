import ISection from "./ISection";

export default interface IPost {
  title: string;
  categories: string[];
  user: string;
  dateCreated: Date;
  thumbnail: string;
  sections: ISection[];
}

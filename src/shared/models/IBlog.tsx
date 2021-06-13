import ISection from "./ISection";

export default interface IBlog {
  title: string;
  categories: string[];
  user: string;
  dateCreated: Date;
  thumbnail: string;
  sections: ISection[];
}

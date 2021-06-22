import IPicture from "./IPicture";

export default interface ISection {
  title?: string;
  picture?: IPicture;
  body: string;
}
